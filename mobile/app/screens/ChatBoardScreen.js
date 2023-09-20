import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { chats } from "../db";
import ChatCard from "../components/chat/ChatCard";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const ChatBoardScreen = ({ navigation, route }) => {
  const { state } = useTheme();
  const _id = route.params._id;
  const chat = chats.find((item) => item._id === _id);
  const { height: screenHeight } = useWindowDimensions();

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={chat.secondPerson.fullname}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.chatCards, { height: screenHeight - 160 - 65 }]}
      >
        <View style={{ display: "flex", alignItems: "center", height: 30 }}>
          <AppText
            style={[
              styles.dayText,
              {
                color: colors[state.theme].mediumText,
                borderColor: colors[state.theme].border200,
                backgroundColor: colors[state.theme].background200,
              },
            ]}
          >
            Today
          </AppText>
        </View>
        <ChatCard
          messageType={"text"} // text, images, audio or video
          item={{
            message: `Hello, Good Afternoon Joseph!🙂`,
            dateTime: 1673948875553,
          }}
          fromMe={false}
        />
        <ChatCard
          messageType={"text"} // text, images, audio or video
          item={{
            message: `Of course, the apartment is always open anytime.`,
            dateTime: 16736993575553,
          }}
          fromMe={false}
        />
        <ChatCard
          messageType={"text"} // text, images, audio or video
          item={{
            message: `I will book for December 23-27. I will also bring some of my things to move.`,
            dateTime: 1673698873053,
          }}
          fromMe={true}
        />
        <ChatCard
          messageType={"images"} // text, images, audio or video
          item={{
            images: [
              "https://picsum.photos/150/150",
              "https://picsum.photos/151/151",
            ],
            dateTime: 1673694975553,
          }}
          fromMe={true}
        />
        <ChatCard
          messageType={"audio"} // text, images, audio or video
          item={{
            audioLink: "",
            dateTime: 1676998875553,
          }}
          fromMe={true}
        />
        <ChatCard
          messageType={"text"} // text, images, audio or video
          item={{
            message: `Alright, I will wait for your booking and arraival.`,
            dateTime: 1693398875553,
          }}
          fromMe={false}
        />
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
  dayText: {
    position: "absolute",
    textAlign: "center",
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontWeight: "bold",
    borderRadius: 3,
  },
});
