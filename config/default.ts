require('dotenv').config()

module.exports = {
  server: {
    baseUrl: process.env.SERVER_BASEURL,
    port: Number(process.env.PORT)
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dbName: process.env.DB_DATABASE
  }
}
