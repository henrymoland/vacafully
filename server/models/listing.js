import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const listingSchema = new Schema(
  {
    propertyName: {
      type: String,
      required: "Property name is required",
    },
    address: {
      type: String,
      required: "Address is required",
    },
    city: {
      type: String,
      required: "City is required",
    },
    zipCode: {
      type: String,
      required: "Zip code is required",
    },
    country: {
      type: String,
    },
    description: {
      type: String,
      required: "Property description is required",
      maxlength: 15000,
    },
    fromDate: {
      type: Date,
    },
    toDate: {
      type: Date,
    },
    beds: {
      type: Number,
    },
    bath: {
      type: Number,
    },
    location: {
      type: String,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
      required: "Price is required",
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listing", listingSchema);
