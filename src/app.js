import express from 'express'
import routes from './routes/index.routes.js'
import errorHandler from './middlewares/errorHandler.js'

export const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes)

app.use(errorHandler)