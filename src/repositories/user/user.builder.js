import User from "../../models/User.js"


// build user docuement
export const buildUser = (userData, addedBy) => {
    return new User({
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        userName: userData.userName,
        password: userData.password,
        addedBy,
        userRole: userData.userRole
    })
}