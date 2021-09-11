import User from "../models/user";
import Stripe from "stripe";
import queryString from "query-string";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const stripeConnect = async (req, res) => {
  // FIND USER FROM DB
  const user = await User.findById(req.user._id).exec();

  // IF USER HAVE NO STRIPE ACCOUNT THEN CREATE ONE
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: "express",
    });

    user.stripe_account_id = account.id;
    user.save();
  }

  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });

  // PREFILL ANY USER DATA
  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });

  // SEND ACCOUNT LINK URL
  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
  res.send(link);
};

const updateDelayDays = async (accountId) => {
  const account = await stripe.accounts.update(accountId, {
    settings: {
      payouts: {
        schedule: {
          delay_days: 7,
        },
      },
    },
  });
  return account;
};

export const getAccountStatus = async (req, res) => {
  const user = await User.findById(req.user._id).exec();
  const account = await stripe.account.retrieve(user.stripe_account_id);
  const updatedAccount = await updateDelayDays(account.id);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      stripe_seller: updatedAccount,
    },
    { new: true }
  )
    .select("-password")
    .exec();

  res.json(updatedUser);
};

export const getAccountBalance = async (req, res) => {
  const user = await User.findById(req.user._id).exec();

  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    });

    res.json(balance);
  } catch (err) {
    console.log(err);
  }
};

export const payoutSetting = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const loginLink = await stripe.accounts.createLoginLink(
      user.stripe_account_id,
      {
        redirect_url: process.env.STRIPE_SETTING_REDIRECT_URL,
      }
    );
    console.log("LOGIN LINK FOR PAYOUT SETTING", loginLink);
    res.json(loginLink);
  } catch (err) {
    console.log("STRIPE PAYOUT SETTING ERROR", err);
  }
};
