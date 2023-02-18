import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


 
export const api =createApi({
    // baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL}),
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5001"}),
    reducerPath:"adminApi",
    tagTypes:["User","Products","Customers","Transaction","Geography"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:()=>'client/products',
            providesTags:["Products"]
        }),
        getCustomer:build.query({
            query:()=>'client/customers',
            providesTags:['Customers']
        }),
        getTransaction:build.query({
            query:({page,pageSize,sort,search})=>({
                url:'client/transaction',
                method:"GET",
                params:{page,pageSize,sort,search},
            }),
            providesTags:["Transaction"]
        }),
        getGeography:build.query({
            query:()=>"client/geography",
            providesTags:["Geography"]
        })
    })
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomerQuery,
    useGetTransactionQuery,
    useGetGeographyQuery
} = api