import React, { useEffect, useState } from 'react' 
import axios from  "axios"
import {styled} from     "styled-components"
import { Link } from 'react-router-dom'
const TITLE=styled.h3`
       font-size: 30px;
    font-family: ui-monospace;
    font-style: oblique;
    color: brown;
    
`
const PRICE=styled.h3`
        font-size: 29px;
        color: brown;
        
`
const CAT=styled.h3`
    font-size: 20px;
`
const MAIN=styled.div`
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

`


const Firstpage = () => {
    const[state,setstate]=useState([])

     async function display(){
        const hai=await axios.get('https://dummyjson.com/products')
        console.log("this is data",hai.data.products);
        setstate(hai.data.products)
        


     }
     useEffect(()=>{
        display()
     },[])
  return (
    <MAIN>
      {state?.map((li)=>(

    
       <Link to={`/details/${li.id}`}>
      <h1>{li.id}</h1>
         <TITLE>{li.title}</TITLE>
       <img src={li.image} width={'300px'} height={'300px'} alt="" />
         <PRICE>PRICE: {li.price}</PRICE>
         <h2>BRAND:{li.brand}</h2>
      <CAT> CATGORY: {li.category}</CAT>
      <h4>RATING:{li.rating}</h4>
   
      </Link> 
      

     
      
       
      ))}
    </MAIN>
  )
}

export default Firstpage
