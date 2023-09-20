import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

// LOCAL IMPORT
import Screen from "../components/Screen";
import OurRecommendation from "../components/OurRecommendation";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const OurRecommendationScreen = ({ navigation }) => {
  const { state } = useTheme();

  return (
    <Screen style={styles.container}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Our Recommendation"}
        RightIcon={
          <Ionicons
            style={{ colors: colors[state.theme].primaryText }}
            name={"ios-search-outline"}
            size={24}
          />
        }
      />
      <OurRecommendation />
    </Screen>
  );
};

export default OurRecommendationScreen;

const styles = StyleSheet.create({
  container: {},
});
