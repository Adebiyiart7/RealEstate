import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useContext, useReducer, createContext } from "react";
import constants from "../config/constants";
import * as SplashScreen from "expo-splash-screen";

// keep splashscreen visible while resources are still loading
SplashScreen.preventAutoHideAsync();

// ACTION TYPES
export const LIGHT = "light";
export const DARK = "dark";

const initialState = {
  theme: "light",
};

// REDUCER
const themeReducer = (state, action) => {
  switch (action.type) {
    case LIGHT:
      return { ...state, theme: action.payload };

    case DARK:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};

// CONTEXT
const ThemeContext = createContext();

// CUSTOM HOOK TO ACCESS THE CONTEXT
export const useTheme = () => useContext(ThemeContext);

// THEME PRIOVIDER
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // LOAD THEME
  useEffect(() => {
    try {
      AsyncStorage.getItem(constants.asyncStorageNames.theme).then((value) => {
        if (value === LIGHT) {
          dispatch({ type: LIGHT, payload: value });
        } else if (value === DARK) {
          dispatch({ type: DARK, payload: value });
        }
      });
    } catch (error) {
      dispatch({ type: LIGHT, payload: LIGHT });
      console.log(error, "Error loading theme!");
    } finally {
      // hide splashscreen
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, []);

  // SAVE THEME
  useEffect(() => {
    try {
      const theme = state.theme;
      AsyncStorage.setItem(constants.asyncStorageNames.theme, theme);
    } catch (error) {
      console.log(error, "Error saving theme!");
    }
  }, [state.theme]);

  const setLightTheme = () => {
    dispatch({ type: LIGHT, payload: LIGHT });
  };

  const setDarkTheme = () => {
    dispatch({ type: DARK, payload: DARK });
  };

  return (
    <ThemeContext.Provider value={{ state, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
