import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import colors from "../config/colors";
import { DARK, LIGHT, useTheme } from "../contexts/ThemeContext";

// LOCAL IMPORTS
import { setUser } from "../features/auth/authSlice";

const BaseData = () => {
  const dispatch = useDispatch();
  const {
    state: { theme },
  } = useTheme();

  AsyncStorage.getItem("@user")
    .then((value) => {
      dispatch(setUser(JSON.parse(value)));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <StatusBar
        style={theme === LIGHT ? DARK : LIGHT}
        backgroundColor={colors[theme].background100}
      />
    </>
  );
};

export default BaseData;
