import { Router } from 'express'

const router = Router()
 
// imports
import authRoutes from './auth/auth.routes.js'
import adminRoutes from './admin/admin.routes.js'
import commonRoutes from './common/common.routes.js'

router.use('/auth', authRoutes)

router.use('/menu', commonRoutes)

router.use('/admin', adminRoutes)

export default router
