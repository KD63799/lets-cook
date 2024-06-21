// Importation du hook useState depuis React
import { useState } from 'react';
// Importation des composants LikeButton et Favorites pour les utiliser dans ce composant
import LikeButton from './LikeButton/LikeButton';
import Favorites from './Favorites/Favorites';

// Déclaration du composant Search qui reçoit des props pour la gestion de la recherche et des favoris
const Search = ({ searchTerm, handleChange, isFavorite, setIsFavorite }) => {
  return (
    // Conteneur principal avec un max-width configuré pour grand écran
    <div className="mx-auto mb-3 xl:w-96">
      {/* Conteneur relatif pour les éléments de formulaire avec un gap horizontal */}
      <div className="relative mb-4 gap-x-4 flex w-full flex-wrap items-stretch">
        {/* Champ de recherche configuré pour réagir aux changements et mettre à jour l'état de searchTerm */}
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          className="relative m-0 block flex-auto rounded border border-solid border-red-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-red-900 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        {/* Conteneur pour le bouton des favoris, intégrant le composant Favorites */}
        <div className="border rounded border-red-500 px-2 pt-1">
          <Favorites isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
        </div>
      </div>
    </div>
  );
};

// Exportation par défaut du composant Search pour utilisation dans d'autres parties de l'application
export default Search;
