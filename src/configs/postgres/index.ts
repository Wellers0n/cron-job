import { staging } from './staging'
import { test } from './test'
import { production } from './production'
import { Dialect } from 'sequelize/types'

const { NODE_ENV } = process.env

export interface IKeysProps {
  DATABASE_RDS_URL?: string
  options?: {
    dialect?: Dialect | string
    ssl?: boolean
    username?: string
    password?: string
    database?: string
    host?: string
    port?: number
    logging?: boolean
    dialectOptions?: {
      ssl?: {
        require?: boolean
        rejectUnauthorized?: boolean
      }
    }
    pool?: {
      max?: number
      min?: number
    }
  }
}

let keys: IKeysProps

switch (NODE_ENV) {
  case 'test':
    keys = test
    break
  case 'staging':
    keys = staging
    break
  case 'production':
    keys = production
    break
  default:
    keys = staging
    break
}

export { keys }
