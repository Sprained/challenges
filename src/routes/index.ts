import { Router } from 'express'

import StoreRoutes from './store'

const routes = Router()

routes.use(StoreRoutes)

export default routes
