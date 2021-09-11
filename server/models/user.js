import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last name is required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: "true",
      min: 8,
      max: 64,
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;

  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("Bcrypt hashing error", err);
        return next;
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("COMPARE PASSWORD ERROR", err);
      return next(err, false);
    }

    console.log("PASSWORD MATCH", match);
    return next(null, match);
  });
};
export default mongoose.model("User", userSchema);
