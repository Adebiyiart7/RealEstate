import { FlatList, StyleSheet } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { users } from "../db";
import AccountCard from "../components/cards/AccountCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const InviteFriendsScreen = ({ navigation }) => {
  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader navigation={navigation} title={"Invite Friends"} />
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <AccountCard
            style={styles.accountCard}
            showIconBorder={false}
            avatar={item.avatar}
            first_text={item.fullname}
            second_text={item.phoneNumber}
            Icon={
              <MaterialCommunityIcons
                name="plus"
                color={colors.primaryColor}
                size={30}
              />
            }
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default InviteFriendsScreen;

const styles = StyleSheet.create({
  accountCard: {
    marginVertical: 12,
  },
});
