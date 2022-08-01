import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from './routes/router'

const app = express()

app.use(express.json())
app.use(router)



app.listen(4444, () => console.log('server on'))