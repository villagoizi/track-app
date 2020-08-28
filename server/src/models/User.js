const bcrypt = require('bcrypt')

function hashPassword (user, options) {
  if (!user.changed('password')) {
    return
  }
  const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
  return user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    hooks: {
      beforeCreate (user, options) {
        return hashPassword(user, options)
      },
      beforeUpdate (user, options) {
        return hashPassword(user, options)
      }
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  return User
}
