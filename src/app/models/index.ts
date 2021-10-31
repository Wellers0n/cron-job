import { keys } from '../../configs/postgres'
import { Sequelize } from 'sequelize'

// models

const { options, DATABASE_RDS_URL } = keys

const sequelize = new Sequelize(DATABASE_RDS_URL, options)

sequelize
  .authenticate()
  .then(() => console.log('[postgres] Connection established successfully.'))
  .catch(error =>
    console.error('[postgres] Unable to connect to the database: ' + error)
  )

export default {
  sequelize,
  Sequelize
}
