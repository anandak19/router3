import { Router } from 'express'

const router = Router()
 
// imports
import authRoutes from './auth/auth.routes.js'
import adminRoutes from './admin/admin.routes.js'
import commonRoutes from './common/common.routes.js'
import siteRoutes from './site/site.routes.js'

router.use('/auth', authRoutes)

router.use('/menu', commonRoutes)

router.use('/admin', adminRoutes)

router.use('/site', siteRoutes)

export default router
