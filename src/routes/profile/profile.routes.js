import express from 'express'
import { validateToken } from '../../controllers/auth/authVarifications.js'
import { addSiteProfile } from '../../controllers/profile/profile.controller.js'
import { validateParamId } from '../../middlewares/global/validateId.js'
import { validateNewProfile } from '../../middlewares/profile/profileValidators.js'
import { varifySite } from '../../middlewares/site/varifySite.js'
import { authorizeAdmin } from '../../middlewares/auth.middleware.js'

const profileRoutes = express.Router()

//req.user
profileRoutes.use(validateToken)

// add a new profile to a site
profileRoutes.post("/:id/new", authorizeAdmin, validateParamId, validateNewProfile, varifySite, addSiteProfile)

// get the profiles of a site 

// 

export default profileRoutes