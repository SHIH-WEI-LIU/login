const LOGIN = require('../LOGIN') // 載入 LOGIN model
const loginList = require("../../users.json").users
const db = require('../../config/mongoose')
db.once("open", () => {
  LOGIN.create(loginList)
    .then(() => {
      db.close()
    })
    .catch(err => console.log(err))
})