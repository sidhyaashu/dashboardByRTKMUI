import Product from "../models/ProductM.js";
import ProductStat from "../models/ProductStatM.js";
import Transaction from "../models/TransactionM.js";
import User from '../models/UserM.js'
import getCountryIso3 from 'country-iso-2-to-3'

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        const productsWithStats= await Promise.all(
            products.map(async(product)=>{
                const stat = await ProductStat.find({
                    productId : product._id
                })
                return{
                    ...product._doc,
                    stat
                }
            })
        )

        res.status(200).json(productsWithStats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getCustomer=async(raq,res)=>{
    try {
        const customers = await User.find({role:"user"}).select("-password")
        res.status(200).json(customers)
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getTransaction = async(req,res)=>{
    try {
        //short should be like this {"field":"userId","sort":"desc"}
        const {page=1,pageSize=20,sort=null,search=""} = req.query

        //formatted sort should be like this {userId:-1}
        const generatedSort=()=>{
            const sortParsed = JSON.parse(sort)
            const sortFormatted={
                [sortParsed.field]:(sortParsed.sort ="asc"?1:-1),
            }
            return sortFormatted
        }
        const sortFormatted = Boolean(sort)?generatedSort():{}
        const transactions = await Transaction.find({
            $or:[
                {cost:{$regex:new RegExp(search,"i")}},
                {cost:{$regex:new RegExp(search,"i")}}
            ]
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize)

        const total = await Transaction.countDocuments({
            name:{$regex:search,$options:'i'}
        })

        res.status(200).json({
            transactions,
            total
        })
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getGeography=async(req,res)=>{
    try{
        const users = await User.find()

        const maapedLocation = users.reduce((acc,{country})=>{
            const countryISO3 = getCountryIso3(country)
            if(!acc[countryISO3]){
                acc[countryISO3]=0
            }
            acc[countryISO3]++
            return acc
        },{})

        const formattedValue = Object.entries(maapedLocation).map(
            ([country,count])=>{
                return {id:country,value:count}
            }
        )

        res.status(200).json(formattedValue)

    }catch(error){
        res.status(404).json({message:error.message})
    }
}