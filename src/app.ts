import 'dotenv/config'
import './app/models'

import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { routes } from './routes'

import jobs from './app/jobs'

import { keys } from './configs/keys'

const port = keys.port || 5005

const app = express()

app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Jobs
jobs.refreshTests()

app.listen(port, () => {
  console.log(`We are live on ${port}`)
  console.log(`Environment: ${keys.environment}`)
})
