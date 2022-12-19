import { Provider } from "react-redux";
import { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// LOCAL IMPORTS
import store from "./app/store/store";
import AppNavigator from "./app/navigations/AppNavigator";

export const AppContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState();

  // get user from async storage an set it value to user state
  AsyncStorage.getItem("user").then((value) => setLoggedInUser(value));

  const contextValue = {
    user: loggedInUser
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
