import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { chats } from "../db";
import ChatCard from "../components/chat/ChatCard";

const ChatBoardScreen = ({ navigation, route }) => {
  const _id = route.params._id;
  const chat = chats.find((item) => item._id === _id);
  const { height: screenHeight } = useDimensions().screen
  
  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={chat.secondPerson.fullname}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.chatCards, { height: screenHeight - 160 - 65}]}>
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={false} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={false} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={true} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={true} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={true} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={false} />
        <ChatCard item={{message: `Hello, Good Afternoon Joseph!🙂`}} fromMe={false} />
      </ScrollView>
    </Screen>
  );
};

export default ChatBoardScreen;

const styles = StyleSheet.create({
  chatCards: {
    // display: "flex",
    // borderWidth: 1,
  },
});
