import Listing from "../models/listing";
import fs from "fs";

export const create = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let listing = new Listing(fields);
    listing.postedBy = req.user;

    if (files.photo) {
      listing.photo.data = fs.readFileSync(files.photo.path);
      listing.photo.contentType = files.photo.type;
    }

    listing.save((err, result) => {
      if (err) {
        console.log("Error saving listing", err);
        res.status(400).send("Error saving the listing");
      }

      res.json(result);
    });
  } catch {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let data = { ...fields };

    if (files.photo) {
      let photo = {};
      photo.data = fs.readFileSync(files.photo.path);
      photo.contentType = files.photo.type;
      data.photo = photo;
    }

    let updated = await Listing.findByIdAndUpdate(req.params.listingId, data, {
      new: true,
    }).select("-data.photo");

    res.json(updated);
  } catch {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

export const listings = async (req, res) => {
  let all = await Listing.find({})
    .limit(24)
    .select("-photo.data")
    .populate("postedBy", "_id name")
    .exec();
  console.log(all);
  res.json(all);
};

export const getSellerListings = async (req, res) => {
  let allSellerListings = await Listing.find({ postedBy: req.user._id })
    .select("-photo.data")
    .populate("postedBy", "_id")
    .exec();

  res.send(allSellerListings);
};

export const image = async (req, res) => {
  let listing = await Listing.findById(req.params.listingId).exec();

  if (listing && listing.photo && listing.photo.data !== null) {
    res.set("Content-Type", listing.photo.contentType);
    return res.send(listing.photo.data);
  }
};

export const deleteListing = async (req, res) => {
  let deletedListing = await Listing.findByIdAndDelete(
    req.params.listingId
  ).exec();

  res.json(deletedListing);
};

export const getListingById = async (req, res) => {
  let listing = await Listing.findById(req.params.listingId)
    .select("-photo.data")
    .exec();
  res.json(listing);
};

export const searchListings = async (req, res) => {
  const { location, date, bed } = req.body;

  let result = await Listing.find({
    location,
  })
    .select("-photo.data")
    .exec();
  res.json(result);
  console.log(result);
};
