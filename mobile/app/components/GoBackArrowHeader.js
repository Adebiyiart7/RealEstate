import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const GoBackArrowHeader = ({
  title,
  navigation,
  RightIcon,
  RightIconExtra,
  isTabScreen
}) => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {!isTabScreen && (
        <TouchableOpacity style={styles.left}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            style={styles.arrow}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      )}
      <AppText
        numberOfLines={1}
        style={[styles.title, { width: screenWidth - 138 }]}
      >
        {title}
      </AppText>
      {RightIcon && (
        <TouchableOpacity style={styles.right}>{RightIcon}</TouchableOpacity>
      )}
      {RightIconExtra && (
        <TouchableOpacity style={{ ...styles.right, ...styles.rightExtra }}>
          {RightIconExtra}
        </TouchableOpacity>
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
    borderRadius: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    minHeight: 70,
  },
  left: {},
  right: {
    position: "absolute",
    right: 40,
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.background100,
    padding: 10,
    borderRadius: 50,
  },
  rightExtra: {
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
