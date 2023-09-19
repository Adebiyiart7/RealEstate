import { ScrollView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// LOCAL IMPORTS
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Screen = ({ children, style, scrollable = true }) => {
  const { state } = useTheme();
  const containerStyles =
    state.theme === LIGHT
      ? colors.light.background100
      : colors.dark.background100;

  if (scrollable) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: containerStyles }, style]}
      >
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
});
