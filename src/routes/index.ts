import Router from 'express-promise-router'

import { v1Routes } from './v1'

const routes = Router()

routes.use('/v1', v1Routes)

export { routes }