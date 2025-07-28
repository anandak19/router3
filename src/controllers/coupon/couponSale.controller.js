

// sell coupon by staff ---PENDING
export const sellCoupon = async (req, res, next) => {
    try {
        // get site id
        // get profile string value
        // validate both
        // get customer details from req.customer (phone, whatsappnum, customer name)

        // get a random coupon with given site & profile,  mark as sold
        // send coupon code to customer via sms or whatsapp
        // record sale
            // - customer contact num
            // coupon code
            // site
            // profile
            // price
            // timestamp
            
        // update users balance with sale amound
    } catch (error) {
        next(error)
    }
}

// get recent sales by user ---PENDING
export const getRecentSales = async (req, res, next) => {
    try {
        // get current user id
        // find the sales done by user from sales
        // sort by recent first
        // return 
    } catch (error) {
        next(error)
    }
}