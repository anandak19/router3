import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema(
  {
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Routers",
    },
    couponNumber: { type: String, default: "", trim: true },
    profile: { type: String, required: true, trim: true },
    status: { type: String, enum: ["available", "sold"] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Coupon", CouponSchema);
