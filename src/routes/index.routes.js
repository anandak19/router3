import { Router } from 'express'

const router = Router()
 
// imports
import authRoutes from './auth.routes.js'
import adminRoutes from './admin.routes.js'
import commonRoutes from './common.routes.js'

router.use('/auth', authRoutes)

router.use('/menu', commonRoutes)

router.use('/admin', adminRoutes)

export default router
