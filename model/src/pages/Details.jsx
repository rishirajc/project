import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {styled} from "styled-components"

const MAIN=styled.div`
    background-color: #57b6d8;
`

const Details = () => {
   const urlvalue= useParams()
   console.log( 'url values',urlvalue.id);
   
    const[state,setstate]=useState([])

    async function display(){
       const hai=await axios.get('https://dummyjson.com/products')
       console.log("this is data",hai.data.products);
       setstate(hai.data.products)
       


    }
    console.log(state);
    
    useEffect(()=>{
       display()
    },[])
    const singledata=state.filter((lin)=>{
        return lin.id==urlvalue.id
    })
    console.log(singledata);
    
  return (
    <MAIN>
        {singledata?.map((li)=>(
        
            <>
             <h1>{li.id}</h1>
            <img src={li.image} width={'400px'} height={'400px'} alt="" />
            <h2>PRICE: {li.price}</h2>
           
            <h3>BRAND:{li.brand}</h3>
        
            <h3>CATEGORY:{li.category}</h3>
                <h3>RATING:{li.rating}</h3>
            <h3>DESCRIPTION:{li.description}</h3>
            <h3>TITLE:{li.title}</h3>
            <h3>WARRENTY:{li.warrantyInformation}</h3>
     
                <Link to={`/cart/${li.id}`}>
                <button >ADD TO CART </button>
            </Link>
           <Link to={'/order'}><button>PLACE ORDER</button></Link> 
            </>
        ))}
        
      
    </MAIN>
  )
}

export default Details
