import mongoose from "mongoose";
import { userRoleList } from "../constants/userRoles.js";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    userName: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    userRole: { type: String, required: true, enum: userRoleList },
    status: {type: String, enum: ["active", "suspended"], default: "active"}
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
