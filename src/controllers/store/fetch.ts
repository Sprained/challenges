import { Response, Request } from 'express'

import StoreService from '../../services/store'

class StoreFetchController {
    getSchedules = async (req: Request, res: Response) => {
        const schedule = await StoreService.getSchedules()

        return res.status(200).send({availableTimes: schedule})
    }
}

export default new StoreFetchController()