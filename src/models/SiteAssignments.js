import mongoose from "mongoose";
import { USER_ROLES } from "../constants/userRoles";

const SiteAssignmentsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: [USER_ROLES.ACCOUNTANT, USER_ROLES.PARTNER, USER_ROLES.SUB_ADMIN], 
    },
    assignedSites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Site",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Site", SiteAssignmentsSchema);
