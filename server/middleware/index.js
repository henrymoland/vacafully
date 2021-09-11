import expressJwt from "express-jwt";
import Listing from "../models/listing";

// PROTECT FOR ONLY LOGGED IN USER
export const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

export const listingOwner = async (req, res, next) => {
  let listing = Listing.find(req.params.listingId);
  let owner = listing.postedBy._id.toString() === req.user._id.toString();

  if (!owner) {
    return res.status(403).send("You are not the host of this listing");
  }

  next();
};
