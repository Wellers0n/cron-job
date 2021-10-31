import { Request, Response } from 'express'

import { GetHealthService } from '../../../services/HealthService'

async function GetHealthController(request: Request, response: Response): Promise<Response> {
  const apiResponse = await GetHealthService()
  return response.status(200).json(apiResponse)
}

export { GetHealthController }
