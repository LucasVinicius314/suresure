import * as express from 'express'

const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
