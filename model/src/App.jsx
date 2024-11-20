import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from  "react-router-dom"
import Firstpage from "./pages/Firstpage"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Orderpage from "./pages/Orderpage"
import Cartpage from "./pages/Cartpage"

function app(){
  const hai=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/first" element={<Firstpage/>}/>
    <Route path="/details/:id" element={<Details/>}></Route>
    <Route path="/order" element={<Orderpage/>}></Route>
    <Route path="/cart/:id" element={<Cartpage/>}></Route>
    </>

  ))
  return(
    <div>
      <RouterProvider router={hai}></RouterProvider>
    </div>
  )

}
export default app