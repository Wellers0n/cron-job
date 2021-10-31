const { STAGING_POSTGRES_PASSWORD_TEST } = process.env

const test = {
  DATABASE_RDS_URL: 'postgres://postgres:postgres_test@127.0.0.1:5432/test_db',
  
  options: {
    username: 'postgres',
    password: STAGING_POSTGRES_PASSWORD_TEST,
    database: 'test_db',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false
  }
}

export { test }
