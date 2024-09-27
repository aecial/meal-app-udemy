import { createContext, useState } from "react";

// Create the context with default values
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // Function to add a favorite meal by id
  function addFavorite(id) {
    setFavoriteMealIds((current) => [...current, id]);
  }

  // Function to remove a favorite meal by id
  function removeFavorite(id) {
    setFavoriteMealIds((current) => current.filter((mealId) => mealId !== id));
  }

  // Value to be passed to the context provider
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
