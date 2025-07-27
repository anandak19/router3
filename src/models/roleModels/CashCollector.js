import mongoose from "mongoose";
const { Schema } = mongoose;

const CashCollectorSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    cashFromMe: { type: Number, default: 0, min: 0 }, // totalCashCollectedFromMe
    cashFromOthers: { type: Number, default: 0, min: 0 }, // cashCollectedFromOthers
    balanceLeft: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("CashCollector", CashCollectorSchema);
