import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../../config/colors";
import AppText from "../AppText";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const ChatCard = React.memo(({ fromMe, messageType, item }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const dateTime = new Date(item.dateTime);
  const { width: screenWidth } = useWindowDimensions();

  const cardStyles = isLight ? styles.cardLight : styles.cardDark;
  const fromMeCardStyles = {
    alignSelf: "flex-end",
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: smallRadius,
    backgroundColor: colors[state.theme].background200,
  };
  const fromMeCardTextStyles = isLight
    ? { color: colors.light.white }
    : { color: colors.dark.white };
  const cardDateTimeTextStyles = isLight
    ? styles.cardDateTimeTextLight
    : styles.cardDateTimeTextDark;

  if (messageType === "text") {
    return (
      <View style={[styles.card, cardStyles, fromMe ? fromMeCardStyles : {}]}>
        <AppText style={[styles.cardText, fromMe ? fromMeCardTextStyles : {}]}>
          {item.message}
        </AppText>
        <AppText
          style={[
            styles.cardDateTimeText,
            cardDateTimeTextStyles,
            fromMe ? fromMeCardTextStyles : {},
          ]}
        >
          {dateTime.getHours()}:{dateTime.getMinutes()}{" "}
          {fromMe && (
            <MaterialCommunityIcons
              size={16}
              name="check-all"
              color={isLight ? colors.light.white : colors.dark.white}
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
          cardStyles,
          fromMe ? fromMeCardStyles : {},
          styles.cardImages,
          item.images.length > 1 ? { width: "80%" } : {},
        ]}
      >
        <Image
          style={[
            styles.cardImage,
            {
              width: (screenWidth - 32) * 0.4 - 10,
              height: (screenWidth - 32) * 0.4 - 10,
            },
          ]}
          source={{ uri: item.images[0] }}
        />
        {item.images[1] && (
          <Image
            style={[
              styles.cardImage,
              {
                width: (screenWidth - 32) * 0.4 - 10,
                height: (screenWidth - 32) * 0.4 - 10,
              },
            ]}
            source={{ uri: item.images[1] }}
          />
        )}
        <AppText
          style={[
            styles.cardDateTimeText,
            cardDateTimeTextStyles,
            { bottom: -8 },
          ]}
        >
          {dateTime.getHours()}:{dateTime.getMinutes()}{" "}
          {fromMe && (
            <MaterialCommunityIcons
              size={16}
              name="check-all"
              color={isLight ? colors.light.mediumText : colors.dark.mediumText}
            />
          )}
        </AppText>
      </View>
    );
  }

  // if (messageType === "audio") {
  //   return (
  //     <View
  //       style={[styles.card, cardStyles, fromMe ? fromMeCardStyles : {}, styles.cardAudio]}
  //     >
  //       <AppText>Audio Here</AppText>
  //       <AppText style={[styles.cardDateTimeText,cardDateTimeTextStyles, cardDateTimeTextStyles]}>
  //         {dateTime.getHours()}:{dateTime.getMinutes()}
  //       </AppText>
  //     </View>
  //   );
  // }
});

export default ChatCard;

const radius = 18;
const smallRadius = 7;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignSelf: "flex-start",
    borderRadius: radius,
    marginVertical: 10,
    padding: 18,
    maxWidth: "80%",
    borderBottomLeftRadius: smallRadius,
  },
  cardLight: {
    backgroundColor: colors.light.background200,
  },
  cardDark: {
    backgroundColor: colors.dark.background200,
  },
  cardText: {
    fontSize: 16,
  },
  cardDateTimeText: {
    position: "absolute",
    bottom: 8,
    right: 16,
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "italic",
  },
  cardDateTimeTextLight: {
    color: colors.light.mediumText,
  },
  cardDateTimeTextDark: {
    color: colors.dark.mediumText,
  },
  cardImage: {
    borderRadius: radius,
  },
  cardImages: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 0,
    paddingVertical: 10,
  },
});
