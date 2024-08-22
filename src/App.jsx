import Hero from "./Components/HomePage/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Men from "./Components/Men"
import Women from "./Components/Women"
import Kids from "./Components/Kids"
import Sale from "./Components/Sale"
import New from "./Components/New"
import Cart from "./Components/Cart/Cart"
import Footer from "./Components/Footer"
import Product from "./Components/SingleProdComponents/Product"
import ProductStore from "./Store/ProductStore"
import Checkout from "./Components/Checkout/Checkout"
import MemberLogin from "./Components/MemberLogin"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    < div>
    <ProductStore>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/new&featured' element={<New/>}/>
      <Route path='/mens' element={<Men/>}/>
      <Route path='/womens' element={<Women/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/product' element={<Product/>}> 
      <Route path=":productID" element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout />} /> 
      <Route path='/Member-login' element={<MemberLogin />} />
     </Routes>
     <Footer/>
     </BrowserRouter>
     </ProductStore>
     </div>
  )
}

export default App
