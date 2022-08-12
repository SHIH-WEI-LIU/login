// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const LOGIN = require('../../models/LOGIN')

//首頁路由
router.get('/', (req, res) => {
  res.render('index')// 將資料傳給樣板
})

//登入後的路由
router.post('/signIn', (req, res) => {
  const { email, password } = req.body
  LOGIN.findOne({ email, password })
    .then(data =>
      data ? res.render("index", { firstName: data.firstName, email: data.email }) : res.render("wrong")
    )
    .catch(error => console.error(error))
})

//建立新帳戶
router.post("/:create", (req, res) => {
  const { firstName, email, password } = req.body
  LOGIN.create({ firstName, email, password })
    .then(() => res.redirect("/"))
    .catch(error => console.error(error))
})


module.exports = router // 匯出路由器