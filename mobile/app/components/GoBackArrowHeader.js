import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const GoBackArrowHeader = ({ title, navigation, RightIcon }) => {
  const { width: screenWidth } = useDimensions().screen;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <AppText
        numberOfLines={1}
        style={[styles.title, { width: screenWidth - 138 }]}
      >
        {title}
      </AppText>
      {RightIcon && (
        <TouchableOpacity style={styles.right}>{RightIcon}</TouchableOpacity>
      )}
    </View>
  );
};

export default GoBackArrowHeader;

const styles = StyleSheet.create({
  arrow: {
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.background100,
    padding: 10,
    borderRadius: 50
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center"
  },
  left: {},
  right: {
    position: "absolute",
    right: 0,
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.background100,
    padding: 10,
    borderRadius: 50
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  }
});
