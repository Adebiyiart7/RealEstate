import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Chats from "../components/messages/Chats";
import Calls from "../components/messages/Calls";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { useTheme } from "../contexts/ThemeContext";

const MessagesScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [showChats, setShowChats] = useState(true);

  const activeTabStyle = {
    borderBottomColor: colors[state.theme].primaryColor,
    borderBottomWidth: 3,
  };
  const tabTextColor = { color: colors[state.theme].lightText };
  const activeTabTextStyle = { color: colors[state.theme].primaryColor };

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        isTabScreen
        navigation={navigation}
        title={"Messages"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={24}
            color={colors[state.theme].primaryText}
          />
        }
        RightIconExtra={
          <Ionicons
            size={24}
            name={"ios-search-outline"}
            color={colors[state.theme].primaryText}
          />
        }
      />
      <View style={styles.tabs}>
        <AppButton
          secondary
          onPress={() => setShowChats(true)}
          style={[styles.tab, showChats ? activeTabStyle : {}]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            showChats ? activeTabTextStyle : {},
          ]}
        >
          Chats
        </AppButton>
        <AppButton
          secondary
          onPress={() => setShowChats(false)}
          style={[
            styles.tab,
            { borderBottomColor: colors[state.theme].border200 },
            !showChats ? activeTabStyle : {},
          ]}
          textStyle={[
            styles.tabText,
            tabTextColor,
            !showChats ? activeTabTextStyle : {},
          ]}
        >
          Calls
        </AppButton>
      </View>
      <View>
        {showChats ? (
          <Chats navigation={navigation} />
        ) : (
          <Calls navigation={navigation} />
        )}
      </View>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
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
  },
  tabText: {
    fontSize: 18,
  },
});
