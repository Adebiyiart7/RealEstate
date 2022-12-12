import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const GoBackArrowHeader = ({ title, navigation }) => {
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
      <AppText numberOfLines={1} style={styles.title}>
        {title}
      </AppText>
    </View>
  );
};

export default GoBackArrowHeader;

const styles = StyleSheet.create({
  arrow: {
    color: defaultStyles.colors.primaryText,
    backgroundColor: defaultStyles.colors.lightBackground,
    padding: 10,
    borderRadius: 50,
  },
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
    fontWeight: "bold",
    marginLeft: 10
  }
});
