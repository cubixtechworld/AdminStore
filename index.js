const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const router=require('./routes/index.js');
const connectDB=require('./config/db.js');
const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL.replace(/\/$/, ""),
    credentials : true
}))
app.options('*', cors());
app.use(express.json())
app.use(cookieParser())

const PORT = 8080 || process.env.PORT

app.use("/api",router)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})