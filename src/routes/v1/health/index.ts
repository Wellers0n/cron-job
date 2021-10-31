import Router from 'express-promise-router'

import { GetHealthController } from '../../../app/controllers/HealthController'

const router = Router()

router.get('/', GetHealthController)

export { router as healthRouter }
