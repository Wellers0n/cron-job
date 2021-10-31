const { STAGING_DATABASE_URL } = process.env
import { IKeysProps } from './'

export const staging = {
  DATABASE_RDS_URL: 'postgres://postgres:postgres_test@127.0.0.1:5432/test_db',
  options: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 100,
      min: 0
    },
    logging: false
  }
} as IKeysProps
