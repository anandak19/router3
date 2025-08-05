import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    profile: { type: String, required: true, trim: true },
    cost: { type: Number, required: true, min: 0, default: 0 },
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sites",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema)
