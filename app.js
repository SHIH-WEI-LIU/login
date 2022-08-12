//串接模組
const express = require('express')
const exphbs = require('express-handlebars') //樣版引擎
const bodyParser = require('body-parser') // 引用 body-parser(用來抓取res.body)
const routes = require('./routes') //引入路由器時，路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案
require('./config/mongoose') //載入mongoose
const port = process.env.PORT || 3000 //如果在 Heroku 環境則使用 process.env.PORT，否則為本地環境，使用 3000 

const app = express()



// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))

// 將 request 導入路由器
app.use(routes)


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

