import { ScrollView, View, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";
import Constants  from "expo-constants";

const Screen = ({ children, style, scrollable = true }) => {
  if (scrollable) {
    return (
      <ScrollView style={[styles.container, style]}>{children}</ScrollView>
    );
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    backgroundColor: defaultStyles.colors.background100,
  },
});
