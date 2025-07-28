import express from 'express'
import { validateToken } from '../../controllers/auth/authVarifications.js'
import { getMenu } from '../../controllers/common/menu.controller.js'

const commonRoutes = express.Router()

commonRoutes.get("/", validateToken, getMenu)

export default commonRoutes
