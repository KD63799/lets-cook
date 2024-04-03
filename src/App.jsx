import { useState } from 'react'
import Navbar from './Component/navbar/Navbar'
import MealCard from './Component/MealCard/MealCard'
import Footer from './Component/Footer/Footer'
import Search from './Component/Search'
import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <main className="pt-2" >
      <Search />
    <MealCard />
    </main>
    <Footer />
    </>
  )
}

export default App
