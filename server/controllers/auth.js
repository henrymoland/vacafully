import User from "../models/user";
import jwt from "jsonwebtoken";

// REGISTER USER
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // VALIDATE NAME, EMAIL AND PASSWORD
    if (!firstName) {
      return res.status(400).send("First name is required");
    }

    if (!lastName) {
      return res.status(400).send("Last name is required");
    }

    if (!password || password.length < 8) {
      return res
        .status(400)
        .send("Password is required and should a min of 8 characters long");
    }

    // CREATE A USER
    const user = new User(req.body);
    let userExists = await User.findOne({ email }).exec();
    if (userExists) {
      return res.status(400).send("Sorry, Email is taken");
    }
    await user.save();
    console.log("NEW USER REGISTERED", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("USER REGISTRATION FAILED", err);
    return res.status(400).send("User registration failed try again");
  }
};

// LOGIN USER
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();

    if (!user) {
      res
        .status(400)
        .send(
          "Hey Stranger! We don't recognize that login. Spell check your info and try again!"
        );
    }
    console.log("GENEARATE TOKEN FOR USER");
    // COMPARE PASSWORD AND GET TOKEN
    user.comparePassword(password, (err, match) => {
      if (!match || err)
        return res
          .status(400)
          .send(
            "Hey Stranger! We don't recognize that login. Spell check your info and try again!"
          );

      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.json({
        token,
        user,
      });
    });
  } catch {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Login Failed");
  }
};
