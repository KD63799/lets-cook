import { useState } from 'react'
import Navbar from './Component/navbar/Navbar'
import MealCard from './Component/MealCard/MealCard'
import Footer from './Component/Footer/Footer'
import Search from './Component/Search'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState('');


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />
      <main className="pt-3">
        <Search isFavorite={isFavorite} setIsFavorite={setIsFavorite} searchTerm={searchTerm} handleChange={handleChange} />
        <MealCard favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes} isFavorite={isFavorite} setIsFavorite={setIsFavorite} searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  )
}

export default App

