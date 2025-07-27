import mongoose from "mongoose";
const { Schema } = mongoose;

const StaffSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    totalSales: { type: Number, default: 0, min: 0 }, // totalSalesByUser
    cashFromMe: { type: Number, default: 0, min: 0 }, // totalCashCollectedFromMe
    balanceLeft: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Staff", StaffSchema);
