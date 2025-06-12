import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 80
// const port = 7880
// http://wasankds.thddns.net:7880/

// Middleware to parse JSON request bodies
app.use(express.json())

import aboutRouter from './routes/aboutRouter.js'
import loginRouter from './routes/loginRouter.js'


global.titleHome = 'Home'
global.DOMAIN_ALLOW = 'http://localhost'
global.HOME = 'HOME'
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('index', { title: titleHome  })
})
app.use(aboutRouter)
app.use(loginRouter)

// Define a route
app.post('/data', (req, res) => {
  console.log(`---------${req.originalUrl}---------`)
  console.log("req.body ===> ", req.body)
  res.send({ status: 'ok' })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});