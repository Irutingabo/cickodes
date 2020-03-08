require('dotenv').config()
import express from 'express'

const app = express()
const router = express.Router()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

export {app}
