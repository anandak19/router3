import { rolewiseMenu } from "../../config/roleConfig.js";

export const getMenu = (req, res, _next) => {
    const role = req.user.userRole; 
    const menu = rolewiseMenu[role] || []
    res.json({menu})
}