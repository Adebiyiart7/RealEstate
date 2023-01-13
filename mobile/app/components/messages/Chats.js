import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

// LOCAL IMPORTS
import { chats } from "../../db";
import AccountCard from "../cards/AccountCard";
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";

const ChatInfo = ({ item }) => {
  const dateTime = new Date(item.lastMessageDateTime);
  
  return (
    <View style={{display: "flex", alignItems: "flex-end"}}>
      <View style={styles.messagesCountContainer}>
        <AppText style={styles.messagesCount}>
          {item.unReadMessagesCount}
        </AppText>
      </View>
      <AppText style={styles.dateTime}>
        {dateTime.getHours()}:{dateTime.getMinutes()}
      </AppText>
    </View>
  );
};

const Chats = ({navigation}) => {
  return (
    <View>
      <FlatList
        style={styles.messages}
        data={chats}
        showsVerticalScrollIndicator={false}
        key={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(routes.CHAT_BOARD, {_id: item._id})}>
            <AccountCard
              emptyRightComponent
              style={styles.card}
              avatar={item.me.avatar}
              first_text={item.me.fullname}
              second_text={item.lastMessage}
              Icon1={<ChatInfo item={item} />}
              Icon2={" "}
            />
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{ marginBottom: 260 }}></View>}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10
  },
  dateTime: {
    color: colors.mediumText,
    fontSize: 12,
    fontWeight: "600"
  },

  messagesCount: {
    height: 25,
    width: 25,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: colors.primaryColor,
    fontWeight: "bold",
    borderRadius: 20,
    color: colors.white,
    marginBottom: 3
  }
});
