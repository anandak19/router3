import { STATUS_CODES } from "../constants/statusCodes.js"
import { AppError } from "../utils/appError.js"

export const checkPermission = (permission) => {
    return (req, _res, next) => {
        if(!req.user.permission.includes(permission)) {
            throw new AppError("Permission denied", STATUS_CODES.UNAUTHORIZED)
        }
        next()
    }
}


/*
route before above one

export const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);

  if (!user) return res.status(401).json({ message: "User not found" });

  // Fetch permissions from role
  const role = await Role.findOne({ key: user.role });
  req.user = {
    _id: user._id,
    name: user.name,
    role: user.role,
    permissions: role?.permissions || []
  };

  next();
};




*/