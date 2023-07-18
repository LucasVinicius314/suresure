import * as express from 'express'

const app = express()

app.use((req, res, next) => {
  const ip = req.ip

  console.log('ip: ' + ip)

  for (const key in req.headers) {
    console.log(`${key}: ${req.headers[key]}`)
  }

  next()
})

app.use(express.static('public'))

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
