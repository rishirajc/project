import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Cartpage = () => {
    const carted= useParams()
    console.log(carted.id);

    const[state,setstate]=useState([])
    const[state1,setstate1]=useState(0)

   async function world(){
        const hai=await axios.get('https://dummyjson.com/products')
        console.log(hai.data.products);
        setstate(hai.data.products)
        
    }
    function display(){
      setstate1(state+1)

    }
    function display2(){
      setstate1(state > 0 ? state - 1 :0)

    } 
    function display3(){
      setstate1(0)

    }
    useEffect(()=>{
        world()
    },[])

    const orderid=state.filter((ui)=>{
        return ui.id==carted.id

    })
    console.log('id value',orderid);
    
  return (
    <div>
      {orderid?.map((li)=>(
        <div>
        <img src={li.image} width={'500px'} height={'500px'} alt="" />
        <h2>PRICE:{li.price}</h2>

        </div>
      ))}
      <button onClick={display}>increment</button>
      <button onClick={display2}>decrement</button>
      <button onClick={display3}>reset</button>
      </div>
  
  )
}

export default Cartpage
