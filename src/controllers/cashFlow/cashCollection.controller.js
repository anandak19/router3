

// collect cash from selected user --- PENDING
// staff - cash collector / cash collector - cash collector / cash collector - accountant
export const collectCash = async (req, res, next) => {
    try {
        // get from user id
        // get current user id
        // get amount to collect & discription
        // get site, where amount is collecting source
        // validate if the user has the amount in that site

        // on collection
            // reduce from users site balance
            // increese current users balance

        // record cash collection / tranasaction
            // collector name
            // collected from user
            // site
            // amount 
            // discription 
            // time stamp

    } catch (error) {
        next(error)
    }
}

// get cash collection history --- PENDING
export const getCollectionHistory = async (req, res, next) => {
    try {
        // get currnet user data
        // find the cash collection transactions made by user
        // aggregate it to each sites
            // example: site 1: total 
                    //  site 2: total 
                    //  total: total on all sites
        // return data 
    } catch (error) {
        next(error)
    }
} 

// collect cash from selected cash collector by accountant --- PENDING
export const collectCashByAccountant = async (req, res, next) => {
    try {
        // get from user id
        // get current user id
        // get amount to collect & discription
        // get site, where amount is collecting source
        // validate if the user has the amount in that site

        // on collection
            // reduce from users site balance
            // increese current users balance

        // record cash collection / tranasaction
            // collector name
            // collected from user
            // site
            // amount 
            // discription 
            // time stamp

        // add it to accountant ledger  ???????????????

    } catch (error) {
        next(error)
    }
}
