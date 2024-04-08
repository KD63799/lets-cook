import React from "react";
import { useState, useEffect } from "react";
import recipesData from "../../data/recettes.json";
import LikeButton from "../LikeButton/LikeButton";

const MealCard = ({ searchTerm, isFavorite }) => {
  
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  
  const handleFavoriteRecipes = () => {
    const updatedFavorites = recipesData.filter((recipe) => recipe.isFavorite);
    setFavoriteRecipes(updatedFavorites);
  };

  const filteredRecipes = recipesData.filter((recipe) => {
    const filteredFavorites = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    return isFavorite? filteredFavorites && recipe.isLiked : filteredFavorites }
  );



  useEffect(() => {
    handleFavoriteRecipes();
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-center text-[#005430] my-2 text-3xl">
        Toutes les recettes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.length === 0 ? (
          <div className="max-w-7xl">
          <p className=" flex justify-center text-red-800">
            Désolé, aucunes recettes ne correspond à votre recherche.
            <img src="public\images\chef-hat-svgrepo-com (1).svg" alt="Chef Hat" />
          </p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className={`meal ${recipe.category} flex-1 md:max-w-sm rounded-lg overflow-hidden shadow-lg`}
              data-tags={`meal,${recipe.category}`}
            >
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src={recipe.imageUrl}
                    alt={recipe.title}
                  />
                </a>
                <div className="overlay absolute inset-0 flex items-center justify-center">
                  <i className="fa-solid fa-square-arrow-up-right text-white"></i>
                </div>
                <div className="flex label absolute bottom-0 right-0 bg-red-900 rounded-md text-white px-1 py-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34 34"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {recipe.category}
                </div>
              </div>
              <div className="relative p-4">
                <h2 className="text-xl text-[#005430] font-bold mb-2">
                  <a href="#">{recipe.title}</a>
                </h2>
                <div className="absolute top-30 right-0">
                  <LikeButton recipe={recipe}></LikeButton>
                </div>
                <p className="mb-2">
                  <u>Difficulté:</u>{" "}
                  {Array(recipe.difficulty).fill("⭐").join(" ")}
                </p>
                <p className="text-gray-700">{recipe.description}</p>
                <p className=" mt-1 font-bold flex justify-end text-gray-900">
                  Recipe By :
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {recipe.author}
                </p>
              </div>
              <div className="p-4 flex justify-end">
                <a href="#" className="text-red-800">
                  En savoir plus
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default MealCard;
