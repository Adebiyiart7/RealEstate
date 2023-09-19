import { StyleSheet, Image, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const NotificationCard = React.memo(({ item }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;

  const newTextStyles = isLight ? styles.newTextLight : styles.newTextDark;
  const dateTimeStyles = isLight ? styles.dateTimeLight : styles.dateTimeDark;
  const imageContainerStyles = isLight
    ? styles.imageContainerLight
    : styles.imageContainerDark;

  return (
    <View style={styles.notificationCard}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.topItems}>
          <View style={[styles.imageContainer, imageContainerStyles]}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.centerItems}>
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={[styles.dateTime, dateTimeStyles]}>
              {formatTimestamp(item.timestamp)}
            </AppText>
          </View>
        </View>
        {item.isNew && (
          <AppText style={[styles.newText, newTextStyles]}>New</AppText>
        )}
      </View>
      <AppText style={styles.message}>{item.message}</AppText>
    </View>
  );
});

export default NotificationCard;

const styles = StyleSheet.create({
  centerItems: {
    marginLeft: 16,
  },
  dateTime: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "500",
  },
  dateTimeLight: {
    color: colors.light.mediumText,
  },
  dateTimeDark: {
    color: colors.dark.mediumText,
  },
  image: {
    height: 20,
    width: 20,
  },
  imageContainer: {
    padding: 13,
    borderRadius: 50,
  },
  imageContainerLight: {
    backgroundColor: colors.light.background200,
  },
  imageContainerDark: {
    backgroundColor: colors.dark.background200,
  },
  message: {
    fontSize: 13,
    marginTop: 10,
  },
  newText: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 22,
    fontSize: 12,
  },
  newTextLight: {
    color: colors.light.white,
    backgroundColor: colors.light.primaryColor,
  },
  newTextDark: {
    color: colors.dark.white,
    backgroundColor: colors.dark.primaryColor,
  },
  notificationCard: {
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  topItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const formatAM_PM = (hours) => {
    if (hours >= 0 && hours <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  };

  let dateTime;
  dateTime = `${date.getDate()} ${formatMonth(
    date.getMonth()
  )}, ${date.getFullYear()}  |  ${
    date.getHours() === 0 ? date.getHours() + "0" : date.getHours()
  }:${
    date.getMinutes() === 0 ? date.getMinutes() + "0" : date.getMinutes()
  }${formatAM_PM(date.getHours())}`;
  return dateTime;
};

const formatMonth = (month) => {
  let monthInText;
  switch (month) {
    case 0:
      monthInText = "Jan";
      break;

    case 1:
      monthInText = "Feb";
      break;

    case 2:
      monthInText = "Mar";
      break;

    case 3:
      monthInText = "Apr";
      break;

    case 4:
      monthInText = "May";
      break;

    case 5:
      monthInText = "Jun";
      break;

    case 6:
      monthInText = "Jul";
      break;

    case 7:
      monthInText = "Aug";
      break;

    case 8:
      monthInText = "Sep";
      break;

    case 9:
      monthInText = "Oct";
      break;

    case 10:
      monthInText = "Nov";
      break;

    case 11:
      monthInText = "Dec";
      break;

    default:
      monthInText = month;
      break;
  }

  return monthInText;
};
