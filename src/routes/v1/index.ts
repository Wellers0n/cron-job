import Router from 'express-promise-router'

import { healthRouter } from './health'

const v1Routes = Router()

v1Routes.use('/health', healthRouter)

export { v1Routes }