import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import AppText from "../components/AppText";
import { notifications } from "../db";
import NotificationCard from "../components/cards/NotificationCard";

const NotificationsScreen = ({ navigation }) => {
  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        title={"Notification"}
        navigation={navigation}
        RightIcon={<MaterialCommunityIcons name="dots-horizontal" size={24} />}
      />
      <View style={styles.notifications}>
        {notifications.length > 0 ? (
          <FlatList
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
            data={notifications}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View key={item._id}>
                <NotificationCard
                  item={{ ...item, image: getImage(item.type) }}
                />
              </View>
            )}
            ListFooterComponent={<AppText></AppText>}
          />
        ) : (
          <>
            <Image
              resizeMode="center"
              source={require("../assets/images/empty-notification.png")}
              style={styles.image}
            />
            <AppText style={styles.infoHeader}>Empty</AppText>
            <AppText>You don't have any notifications at this time.</AppText>
          </>
        )}
      </View>
    </Screen>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  flatList: {
    height: "90%",
  },
  infoHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  image: {
    // height: 400,
    // width: 270,
  },
  notifications: {
    alignItems: "center",
  },
});

const getImage = (value) => {
  let image;

  if (value === "booking") {
    image = require("../assets/images/booking-icon.png");
  } else if (value === "card") {
    image = require("../assets/images/card-icon.png");
  } else if (value === "new") {
    image = require("../assets/images/new-icon.png");
  } else if (value === "user") {
    image = require("../assets/images/user-icon.png");
  } else {
    image = require("../assets/images/new-icon.png");
  }

  return image;
};
