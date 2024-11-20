import React from 'react'
import { useNavigate } from 'react-router-dom'
import{styled} from "styled-components"
const MAIN=styled.div`
background-color: #092652;
`

const Orderpage = () => {
    const navigate=useNavigate()
setTimeout(() => {
       navigate('/first');
        
    }, 2000);
  return (
    <MAIN>
        <h1>ORDER COMPLETE!</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVbZA0JPH3tHUOzLN_E3PuFqkm5Jmr1rzvw&s" width={'500px'}height={'500px'} alt="" />

    </MAIN>
  )
}

export default Orderpage
