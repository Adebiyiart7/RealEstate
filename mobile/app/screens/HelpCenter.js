import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import AppButton from "../components/AppButton";
import FAQ from "../components/helpCenter/FAQ";
import ContactUs from "../components/helpCenter/ContactUs";
import { useTheme } from "../contexts/ThemeContext";

const HelpCenterScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [showFAQ, setShowFAQ] = useState(true);

  const activeTabStyle = {
    borderBottomColor: colors[state.theme].primaryColor,
    borderBottomWidth: 3,
  };

  const activeTabTextStyle = {
    color: colors[state.theme].primaryColor,
  };

  const tabTextColor = { color: colors[state.theme].lightText };
  const tabBorderColor = { borderBottomColor: colors[state.theme].border200 };

  return (
    <Screen scrollable={false} style={{ height: "100%" }}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Help Center"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={24}
            color={colors[state.theme].primaryText}
          />
        }
      />

      <View style={styles.tabs}>
        <AppButton
          onPress={() => setShowFAQ(true)}
          style={[styles.tab, tabBorderColor, showFAQ ? activeTabStyle : {}]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            showFAQ ? activeTabTextStyle : {},
          ]}
          secondary
        >
          FAQ
        </AppButton>
        <AppButton
          onPress={() => setShowFAQ(false)}
          style={[styles.tab, tabBorderColor, !showFAQ ? activeTabStyle : {}]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            !showFAQ ? activeTabTextStyle : {},
          ]}
          secondary
        >
          Contact Us
        </AppButton>
      </View>

      {showFAQ ? <FAQ /> : <ContactUs />}
    </Screen>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({
  accountCard: {
    marginVertical: 12,
  },
  tab: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 5,
    borderRadius: 0,
    borderBottomWidth: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 16,
  },
  tabText: {
    fontSize: 18,
  },
});
