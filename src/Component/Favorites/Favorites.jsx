// Importation des hooks nécessaires depuis React
import React, { useState } from 'react';

// Définition du composant Favorites pour gérer les favoris
function Favorites( {isFavorite, setIsFavorite}) {
  // Fonction pour gérer le clic sur le bouton, qui inverse l'état de favori
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Rendu du composant
  return (
    <div>
      {/* Bouton pour gérer l'état de favori avec un événement onClick */}
      <button onClick={handleClick} className="focus:outline-none">
        {/* Icône en forme de cœur, sa couleur change en fonction de l'état isFavorite */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavorite ? 'red' : 'grey'}
          className="w-6 h-6" // Définit la taille de l'icône
        >
          {/* Chemin SVG pour l'icône en forme de cœur */}
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </button>
    </div>
  );
}

// Exportation par défaut du composant Favorites pour utilisation dans d'autres parties de l'application
export default Favorites;
