import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from "morgan"

import clintRoutes from './routes/clintR.js'
import generalRoutes from './routes/generalR.js'
import managementRoutes from './routes/managementR.js'
import salesRoutes from './routes/salesR.js'



//Product data store
// import User from './models/UserM.js'
// import Product from "./models/ProductM.js"
// import ProductStat from "./models/ProductStatM.js"
// import {dataUser,dataProduct,dataProductStat} from './data/index.js'
// import Transaction from "./models/TransactionM.js"
// import {dataTransaction} from './data/index.js'




//  configaration
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


//  routes
app.use("/client",clintRoutes)
app.use("/general",generalRoutes)
app.use("/management",managementRoutes)
app.use("/sales",salesRoutes)

// mongo setup
const PORT = process.env.PORT || 9000
const BD = process.env.MONGO_URL
mongoose.connect(BD,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>console.log(`Every thing Connected on : ${PORT}`))

    /* ONLY ADD DATA ONE TIME*/
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
}).catch((err)=>console.log(err))

