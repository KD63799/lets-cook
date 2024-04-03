import React from 'react';
import recipesData from '../../data/recettes.json';
import LikeButton from '../LikeButton/LikeButton';

const MealCard = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-center text-[#005430] my-2 text-3xl">Toutes les recettes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipesData.map((recipe) => (
          <article
            key={recipe.id}
            className={`meal ${recipe.category} flex-1 md:max-w-sm rounded-lg overflow-hidden shadow-lg`}
            data-tags={`meal,${recipe.category}`}
          >
            <div className="relative">
              <a href="#">
                <img className="w-full" src={recipe.imageUrl} alt={recipe.title} />
              </a>
              <div className="overlay absolute inset-0 flex items-center justify-center">
                <i className="fa-solid fa-square-arrow-up-right text-white"></i>
              </div>
              <div className="label absolute top-0 right-0 bg-red-900 rounded-md text-white px-2 py-1 text-sm">
                {recipe.category}
              </div>
            </div>
            <div className="relative p-4">
              <h2 className="text-xl text-[#005430] font-bold mb-2"><a href="#">{recipe.title}</a></h2>
              <p className="mb-2">
                <div className="absolute top-30 right-0">
                <LikeButton />
                </div>
                <u>Difficulté:</u> {Array(recipe.difficulty).fill('⭐').join(' ')}
              </p>
              <p className="text-gray-700">{recipe.description}</p>
            </div>
            <div className="p-4 flex justify-end">
              <a href="#" className="text-red-800">En savoir plus</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MealCard;
