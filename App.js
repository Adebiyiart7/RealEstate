import { StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={"#FFF"} />
      <Text>Hello world!</Text>
    </View>
  );
};

export default App;

/**
TODO
 back bottom should close modal


 PUBLISH APK: eas build -p android --profile preview
 *
 */
