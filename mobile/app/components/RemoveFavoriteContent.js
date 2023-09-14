import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "./PropertiesFilterContent";
import AppButton from "./AppButton";
import colors from "../config/colors";
import { useFavorite } from "../contexts/FavoriteHomeContext";
import AppText from "./AppText";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import utils from "../utils";

const RemoveFavoriteContent = React.memo(
  ({ item, setBottomSheetVisibleRemoveFav }) => {
    const { removeFromFavorites } = useFavorite();

    return (
      <View>
        <Header
          style={{ fontSize: 20, textAlign: "center" }}
          title={"Remove from Favorites?"}
        />
        <View style={styles.content}>
          <View style={styles.item}>
            <View style={styles.card}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
              >
                <AppText style={styles.rating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={12}
                    color={colors.primaryOrange}
                  />
                  {item.rating}
                </AppText>
                <View style={styles.heartIcon}>
                  <Ionicons
                    name={"heart"}
                    size={24}
                    color={colors.primaryOrange}
                    onPress={() => {
                      setBottomSheetVisibleRemoveFav(true);
                    }}
                  />
                </View>
              </ImageBackground>
              <View style={styles.details}>
                <View style={styles.texts}>
                  <View>
                    <AppText
                      numberOfLines={2}
                      style={[styles.firstText, { marginTop: 0 }]}
                    >
                      {item.name}
                    </AppText>
                    <AppText numberOfLines={2} style={styles.secondText}>
                      {item.location}
                    </AppText>
                  </View>
                  <AppText numberOfLines={1} style={styles.footer}>
                    <AppText style={[styles.f1, { marginTop: 10 }]}>
                      &#8358;{utils.separateToThounsand(item.cost)}
                    </AppText>
                    <AppText style={styles.f2}>
                      &nbsp;/&nbsp;{item.duration}
                    </AppText>
                  </AppText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttons}>
            <AppButton
              rounded
              secondary
              style={{ ...styles.button, marginRight: 8 }}
              onPress={() => setBottomSheetVisibleRemoveFav(false)}
            >
              Cancel
            </AppButton>
            <AppButton
              rounded
              style={{ ...styles.button, marginLeft: 8 }}
              onPress={() => {
                removeFromFavorites(item._id);
                setBottomSheetVisibleRemoveFav(false);
              }}
            >
              Yes, Remove
            </AppButton>
          </View>
        </View>
      </View>
    );
  }
);

export default RemoveFavoriteContent;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: { padding: 16, borderTopColor: colors.border100, borderTopWidth: 1 },
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
    marginBottom: 16,
    borderRadius: 20,
  },

  details: {
    marginVertical: 5,
    marginHorizontal: 5,
    maxWidth: 200,
  },
  image: {
    borderRadius: 20,
    overflow: "hidden",
    height: 120,
    width: 120,
    maxHeight: 200,
    maxWidth: 200,
    marginRight: 10,
  },
  f1: {
    color: colors.primaryColor,
    fontWeight: "bold",
    fontSize: 22,
  },
  f2: {
    color: colors.mediumText,
    width: "50%",
  },
  firstText: {
    color: colors.primaryText,
    fontSize: 17,
    fontWeight: "bold",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  heartIcon: {
    position: "absolute",
    bottom: 1,
    right: 1,
    padding: 12,
  },
  secondText: {
    color: colors.mediumText,
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 9,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primaryColor,
  },
  texts: { display: "flex", flex: 1, justifyContent: "space-between" },
});
