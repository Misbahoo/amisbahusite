import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      reuiqred: true,
    },
    password: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
