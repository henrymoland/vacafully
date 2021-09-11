import express from "express";

const router = express.Router();

// IMPORT MIDDLEWARE
import { requireSignin } from "../middleware";

// IMPORT AUTH CONTROLLERS
import { stripeConnect } from "../controllers/stripe";
import { getAccountStatus } from "../controllers/stripe";
import { getAccountBalance } from "../controllers/stripe";
import { payoutSetting } from "../controllers/stripe";

router.post("/stripe-connect", requireSignin, stripeConnect);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.post("/get-account-balance", requireSignin, getAccountBalance);
router.post("/payout-setting", requireSignin, payoutSetting);

module.exports = router;
