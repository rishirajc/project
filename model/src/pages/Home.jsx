import React from 'react'
import {styled} from     "styled-components"
import { Link } from 'react-router-dom'

const MAIN=styled.div`
    width: 100%;
    min-height: 130vh;
    background-color: aquamarine;

`
const NAV=styled.div`
    width: 100%;
    height: 60px;
    background-color: #4d779b;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Home = () => {
  return (
    <MAIN>
        <NAV>
     <Link to={'first'}><h2>PRODUCTS </h2></Link> 
  <h2>DETAILS</h2>
      <h2>CART</h2>
      <h2>SEARCH</h2>
      

        </NAV>
        <div>
   <img src="https://www.templateshub.net/uploads/1537207366electrothumb.jpg" width={'100%'} height={'min-height'} alt="" /> 
        </div>
      
    </MAIN>
  )
}

export default Home
