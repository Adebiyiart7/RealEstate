import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";
import constants from "../config/constants";

// ACTION TYPES
const SET_FAVORITES = "SET_FAVORITES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

// INITIAL STATE
const initialState = { favorites: [] };

// REDUCER
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };

    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };

    default:
      return state;
  }
};

// CONTEXT
const FavoriteContext = createContext();

// CUSTOM HOOK TO ACCESS THE CONTEXT
export const useFavorite = () => useContext(FavoriteContext);

// FAVORITES PROVIDER
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  // LOAD FAVORITE
  useEffect(() => {
    try {
      AsyncStorage.getItem(constants.asyncStorageNames.favoriteHomes).then(
        (value) => {
          if (value) {
            const favorites = JSON.parse(value);
            dispatch({ type: "SET_FAVORITES", payload: favorites });
          }
        }
      );
    } catch (error) {
      console.log(error, "Error Setting Favorites");
    }
  }, []);

  // SAVE FAVORITES
  useEffect(() => {
    try {
      const favoritesJSON = JSON.stringify(state.favorites);
      AsyncStorage.setItem(
        constants.asyncStorageNames.favoriteHomes,
        favoritesJSON
      );
    } catch (error) {
      console.log(error);
    }
  }, [state.favorites]);

  const addToFavorites = (id) => {
    dispatch({ type: ADD_TO_FAVORITES, payload: id });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
  };

  return (
    <FavoriteContext.Provider
      value={{ state, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
