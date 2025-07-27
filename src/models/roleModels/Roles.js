import mongoose from "mongoose";
import { userRoleList } from "../../constants/userRoles.js";
const { Schema } = mongoose;

const RolesSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      enum: userRoleList,
      unique: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    description: {
      type: String,
      default: "",
    },
    permissions: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Role", RolesSchema);
