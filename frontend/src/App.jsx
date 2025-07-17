import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import FavoritesPage from './pages/FavoritesPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <Routes className='min-h-screen'>
        <Route path='/' element={<Home/>}/>
        <Route path='/property/:id' element={<PropertyDetails/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </div>
  )
}

export default App
