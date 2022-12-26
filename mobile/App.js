import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

// LOCAL IMPORTS
import store from "./app/store/store";
import AppNavigator from "./app/navigations/AppNavigator";
import BaseData from "./app/screens/BaseData";

const App = () => {
  return (
    <Provider store={store}>
      <BaseData />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
