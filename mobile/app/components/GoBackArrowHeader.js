import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";

const BackArrowHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={defaultStyles.colors.primaryText}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackArrowHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
  },
  left: {
  }
});
