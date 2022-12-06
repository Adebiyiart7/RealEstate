import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const GoBackArrowHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={defaultStyles.colors.primaryText}
        />
      </TouchableOpacity>
      <AppText numberOfLines={1} style={styles.title}>
        {title}
      </AppText>
    </View>
  );
};

export default GoBackArrowHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center"
  },
  left: {},
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 7,
  }
});
