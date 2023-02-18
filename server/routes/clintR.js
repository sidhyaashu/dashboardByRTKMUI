import express from 'express'
import {getProducts,getCustomer,getTransaction,getGeography} from '../controllers/clientC.js'
const router = express.Router()


router.get('/products',getProducts)
router.get('/customers',getCustomer)
router.get('/transaction',getTransaction)
router.get('/geography',getGeography)

export default router