import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

// LOCAL IMPORTS
import { chats } from "../../db";
import AccountCard from "../cards/AccountCard";
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";
import { useTheme } from "../../contexts/ThemeContext";

const ChatInfo = ({ item }) => {
  const { state } = useTheme();
  const dateTime = new Date(item.lastMessageDateTime);

  return (
    <View style={{ display: "flex", alignItems: "flex-end" }}>
      <View style={styles.messagesCountContainer}>
        {item.unReadMessagesCount ? (
          <AppText
            style={[
              styles.messagesCount,
              {
                color: colors[state.theme].white,
                backgroundColor: colors[state.theme].primaryColor,
              },
            ]}
          >
            {item.unReadMessagesCount}
          </AppText>
        ) : null}
      </View>
      <AppText
        style={[styles.dateTime, { color: colors[state.theme].mediumText }]}
      >
        {dateTime.getHours()}:{dateTime.getMinutes()}
      </AppText>
    </View>
  );
};

const Chats = ({ navigation }) => {
  return (
    <View>
      <FlatList
        style={styles.messages}
        data={chats}
        showsVerticalScrollIndicator={false}
        key={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.CHAT_BOARD, { _id: item._id })
            }
          >
            <AccountCard
              showIconBorder={false}
              emptyRightComponent
              style={styles.card}
              avatar={item.secondPerson.avatar}
              first_text={item.secondPerson.fullname}
              second_text={item.lastMessage}
              Icon={<ChatInfo item={item} />}
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
    marginVertical: 10,
  },
  dateTime: {
    fontSize: 12,
    fontWeight: "600",
  },
  messagesCount: {
    height: 25,
    width: 25,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
    borderRadius: 20,
    marginBottom: 3,
    paddingTop: 2,
  },
});
