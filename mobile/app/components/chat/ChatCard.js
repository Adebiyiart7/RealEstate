import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatCard = ({ fromMe, messageType, item }) => {
  const dateTime = new Date(item.dateTime);
  const { width: screenWidth } = useWindowDimensions();

  if (messageType === "text") {
    return (
      <View style={[styles.card, fromMe ? styles.fromMeCard : {}]}>
        <AppText style={[styles.cardText, fromMe ? styles.fromMeCardText : {}]}>
          {item.message}
        </AppText>
        <AppText
          style={[
            styles.cardDateTimeText,
            fromMe ? styles.fromMeCardDateTimeText : {}
          ]}
        >
          {dateTime.getHours()}:{dateTime.getMinutes()}{" "}
          {fromMe && (
            <MaterialCommunityIcons
              size={16}
              name="check-all"
              color={colors.white}
            />
          )}
        </AppText>
      </View>
    );
  }

  if (messageType === "images") {
    return (
      <View
        style={[
          styles.card,
          fromMe ? styles.fromMeCard : {},
          styles.cardImages,
          item.images.length > 1 ? { width: "80%" } : {}
        ]}
      >
        <Image
          style={[
            styles.cardImage,
            {
              width: (screenWidth - 32) * 0.4 - 10,
              height: (screenWidth - 32) * 0.4 - 10
            }
          ]}
          source={{ uri: item.images[0] }}
        />
        {item.images[1] && (
          <Image
            style={[
              styles.cardImage,
              {
                width: (screenWidth - 32) * 0.4 - 10,
                height: (screenWidth - 32) * 0.4 - 10
              }
            ]}
            source={{ uri: item.images[1] }}
          />
        )}
        <AppText style={[styles.cardDateTimeText, { bottom: -8 }]}>
          {dateTime.getHours()}:{dateTime.getMinutes()}{" "}
          {fromMe && (
            <MaterialCommunityIcons
              size={16}
              name="check-all"
              color={colors.mediumText}
            />
          )}
        </AppText>
      </View>
    );
  }

  // if (messageType === "audio") {
  //   return (
  //     <View
  //       style={[styles.card, fromMe ? styles.fromMeCard : {}, styles.cardAudio]}
  //     >
  //       <AppText>Audio Here</AppText>
  //       <AppText style={styles.cardDateTimeText}>
  //         {dateTime.getHours()}:{dateTime.getMinutes()}
  //       </AppText>
  //     </View>
  //   );
  // }
};

export default ChatCard;

const radius = 18;
const smallRadius = 7;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignSelf: "flex-start",
    backgroundColor: colors.background200,
    borderRadius: radius,
    marginVertical: 10,
    padding: 18,
    maxWidth: "80%",
    borderBottomLeftRadius: smallRadius
  },
  fromMeCard: {
    alignSelf: "flex-end",
    backgroundColor: colors.primaryColor,
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: smallRadius
  },
  cardText: {
    fontSize: 16
  },
  fromMeCardText: {
    color: colors.white
  },
  cardDateTimeText: {
    position: "absolute",
    bottom: 8,
    right: 16,
    fontSize: 12,
    color: colors.mediumText,
    fontWeight: "500",
    fontStyle: "italic"
  },
  fromMeCardDateTimeText: {
    color: colors.white
  },
  cardImage: {
    borderRadius: radius
  },
  cardImages: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 0,
    paddingVertical: 10
  }
});
