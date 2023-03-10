import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

// LOCAL IMPORTS
import store from "./app/store/store";
import AppNavigator from "./app/navigations/AppNavigator";
import BaseData from "./app/components/BaseData";
import colors from "./app/config/colors";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background100} />
      <BaseData />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

/**
TODO
 back bottom should close modal


 PUBLISH APK: eas build -p android --profile preview
 *
 */
