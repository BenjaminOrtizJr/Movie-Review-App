import express from 'express'
import cors from 'cors'
import Morgan from 'morgan'
import movies from './api/movies.route.js'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/movies", movies)
app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})

export default app