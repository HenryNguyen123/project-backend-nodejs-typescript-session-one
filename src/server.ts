const express = require('express')
const configViewEngine = require("./config/viewEngine")
require('dotenv').config()
const bodyParser = require('body-parser')
const initApiRouter = require('./routers/api')
// const apiRouter = require('./routers/api')
const configCors = require('./config/cors')
const app = express()
const port = process.env.PORT || 8000

// config cors
configCors(app)

//viewengine
configViewEngine(app)

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initApiRouter(app)
// app.use('/api/v1/', apiRouter);
app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
