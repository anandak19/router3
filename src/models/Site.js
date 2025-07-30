import mongoose from "mongoose";
import { generateDefaultProfiles } from "../utils/siteUtils/profileUtils.js";

const SiteSchema = new mongoose.Schema(
  {
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
    siteName: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    currency: { type: String, required: true, trim: true },
    // profiles: { type: Map, of: Number, default: generateDefaultProfiles },
    dns: { type: String, required: true, trim: true },
    port: { type: Number, required: true },
    callerId: { type: String, enum: ["", "bind"], default: "" },
    userName: { type: String, required: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Site", SiteSchema);
