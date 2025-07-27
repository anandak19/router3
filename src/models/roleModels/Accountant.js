import mongoose from "mongoose";
const { Schema } = mongoose;

const AccountantSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    totalCashCollected: { type: Number, default: 0, min: 0 }, // cashCollectedFromOthers
  },
  { timestamps: true }
);

export default mongoose.model("Accountant", AccountantSchema);
