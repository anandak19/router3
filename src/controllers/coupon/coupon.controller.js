
// add coupons from csv ---PENDING
export const addCoupons = async (req , res, next) => {
    try {
        // get coupons number from parsed req.coupons
        // add all coupons to db with site and profile
    } catch (error) {
        next(error)
    }
}

// get coupon uploaded history of coupon adding staff ---PENDING
export const getCouponUploadHistory = async (req , res, next) => {
    try {
        // get user id
        // find coupons added by user 
        // sort recent first
        // return coupons
    } catch (error) {
        next(error)
    }
}

// get all coupon in stock of - site & profile ---PENDING
export const getAvailableCoupons = async (req, res, next) => {
    try {
        // get site id 
        // get profile id
        // fetch all coupons with given site & profile & status: available
        // return coupons 
    } catch (error) {
        next(error)
    }
}

// get coupon stock count by - site & profile ---PENDING
export const getAvailableCouponsCount = async (req, res, next) => {
    try {
        // get site id 
        // get profile id
        // fetch count of coupons with given site & profile & status: available
        // return count
    } catch (error) {
        next(error)
    }
}