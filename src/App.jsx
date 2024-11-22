import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Brands from './components/AllBrands/Brands'
import Detail from './pages/ProductDetail/Detail'
import Notfound from './components/NotFoundPage/Notfound'
import SearchProducts from './components/SearchProduct/SearchProducts'
import Contact from './pages/Contact/Contact'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Registration from './pages/Registration'
import ScrollTop from './components/ScrollToTop/ScrollTop'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brand' element={<Brands/>}/>
        <Route path='/cat/:cid' element={<Category/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/search' element={<SearchProducts/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <ScrollTop/>
      <Footer/>
    </div>
  )
}

export default App