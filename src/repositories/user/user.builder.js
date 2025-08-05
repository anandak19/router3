import User from "../../models/User.js"


// build user docuement
export const buildUser = (userData, addedBy) => {
    // hash password here using bcriyp
    return new User({
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        userName: userData.userName,
        password: userData.password,
        addedBy,
        userRole: userData.userRole
    })
}