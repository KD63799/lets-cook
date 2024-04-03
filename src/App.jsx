import { useState } from 'react'
import Navbar from './Component/navbar/Navbar'
import MealCard from './Component/MealCard/MealCard'
import Footer from './Component/Footer/Footer'
import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <main >
    <MealCard />
    </main>
    <Footer />
    </>
  )
}

export default App
