import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { users } from "../db";
import AccountCard from "../components/cards/AccountCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import AppButton from "../components/AppButton";
import FAQ from "../components/helpCenter/FAQ";
import ContactUs from "../components/helpCenter/ContactUs";

const HelpCenterScreen = ({ navigation }) => {
  const [showFAQ, setShowFAQ] = useState(true);

  const activeTabStyle = {
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 3,
  };

  const activeTabTextStyle = {
    color: colors.primaryColor,
  };

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Help Center"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={24}
          />
        }
      />

      <View style={styles.tabs}>
        <AppButton
          onPress={() => setShowFAQ(true)}
          style={[styles.tab, showFAQ ? activeTabStyle : {}]}
          textStyle={[styles.tabText, showFAQ ? activeTabTextStyle : {}]}
          secondary
        >
          FAQ
        </AppButton>
        <AppButton
          onPress={() => setShowFAQ(false)}
          style={[styles.tab, !showFAQ ? activeTabStyle : {}]}
          textStyle={[styles.tabText, !showFAQ ? activeTabTextStyle : {}]}
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
    borderBottomColor: colors.border200,
    borderBottomWidth: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  tabText: {
    fontSize: 18,
    color: colors.lightText,
  },
});
