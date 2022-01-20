import { Router } from 'express'

import StoreController from '../controllers/store'

const routes = Router()

routes.route('/schedules')
    .get(StoreController.getSchedules)

export default routes
