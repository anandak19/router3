import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSitesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      index: true,
    },
    siteId: {
      type: Schema.Types.ObjectId,
      ref: "Sites",
      required: true,
      index: true,
    },
    userRole: {type: String, required: true}, 
    // hotspot: { type: String, required: true, trim: true },
    totalSales: { type: Number, default: 0, min: 0 }, // totalSalesByUserInSite
    cashFromMe: { type: Number, default: 0, min: 0 }, // totalCashCollectedFromMe
    cashFromOthers: { type: Number, default: 0, min: 0 }, // cashCollectedFromOthers
    siteBalance: { type: Number, default: 0, min: 0 }, // balanceLeftInSite
  },
  {
    timestamps: true,
  }
);

UserSitesSchema.index({ userId: 1, siteId: 1 }, { unique: true });

export default mongoose.model("UserSite", UserSitesSchema);
