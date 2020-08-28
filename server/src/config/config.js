module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'trackapp',
    username: process.env.DB_USER || '',
    password: process.env.DB_PW || '',
    options: {
      host: process.env.DB_HOST || 'localhost',
      dialect: process.env.DIALECT || 'sqlite',
      storage: './trackapp.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'modedevelopment'
  }
}
