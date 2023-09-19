import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Chats from "../components/messages/Chats";
import Calls from "../components/messages/Calls";

const MessagesScreen = ({ navigation }) => {
  const [showChats, setShowChats] = useState(true);

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
        isTabScreen
        navigation={navigation}
        title={"Messages"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={24}
            color={colors.primaryText}
          />
        }
        RightIconExtra={
          <Ionicons
            size={24}
            name={"ios-search-outline"}
            color={colors.primaryText}
          />
        }
      />
      <View style={styles.tabs}>
        <AppButton
          onPress={() => setShowChats(true)}
          style={[styles.tab, showChats ? activeTabStyle : {}]}
          textStyle={[styles.tabText, showChats ? activeTabTextStyle : {}]}
          secondary
        >
          Chats
        </AppButton>
        <AppButton
          onPress={() => setShowChats(false)}
          style={[styles.tab, !showChats ? activeTabStyle : {}]}
          textStyle={[styles.tabText, !showChats ? activeTabTextStyle : {}]}
          secondary
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
    borderBottomColor: colors.border200,
    borderBottomWidth: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
  },
  tabText: {
    fontSize: 18,
    color: colors.lightText,
  },
});
