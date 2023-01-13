import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { chats } from "../db";

const ChatBoardScreen = ({ navigation, route }) => {
  const _id = route.params._id;
  const chat = chats.find((item) => item._id === _id);

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader navigation={navigation} title={chat.me.fullname} />
    </Screen>
  );
};

export default ChatBoardScreen;

const styles = StyleSheet.create({});
