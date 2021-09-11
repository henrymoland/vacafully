import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// IMPORT MIDDLEWARE
import { requireSignin, listingOwner } from "../middleware";

// IMPORT LISTING CONTROLLERS
import {
  create,
  update,
  listings,
  image,
  searchListings,
  getSellerListings,
  deleteListing,
  getListingById,
} from "../controllers/listing";
import listing from "../models/listing";

router.post("/create-listing", requireSignin, formidable(), create);
router.put(
  "/update-listing/:listingId",
  requireSignin,
  listingOwner,
  formidable(),
  update
);
router.get("/listings", listings);
router.get("/listings/image/:listingId", image);
router.get("/seller-listings", requireSignin, getSellerListings);
router.post("/search-listings", searchListings);
router.delete("/delete/:listingId", deleteListing);
router.get("/listing/:listingId", getListingById);

module.exports = router;
