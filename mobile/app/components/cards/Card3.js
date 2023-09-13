import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";
import utils from "../../utils";
import defaultStyles from "../../config/styles";
import { useFavorite } from "../../contexts/FavoriteHomeContext";
import BottomSheet from "../BottomSheet";
import RemoveFavoriteContent from "../RemoveFavoriteContent";
import { useState } from "react";
import { useEffect } from "react";

const Card3 = React.memo(({ navigation, item, format, customCardStyle }) => {
  const { addToFavorites, state } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  const [bottomSheetVisibleRemoveFav, setBottomSheetVisibleRemoveFav] =
    useState(false);
  const dimension = useDimensions().screen;

  const imageDimension = {
    height:
      format === "list" ? dimension.width / 2.4 - 32 : dimension.width / 2 - 32,
    width:
      format === "list" ? dimension.width / 2.4 - 32 : dimension.width / 2 - 32,
  };

  const detailsDimension = {
    width:
      format === "list"
        ? dimension.width - imageDimension.width - 48
        : dimension.width / 2 - 32,
  };

  useEffect(() => {
    setIsFavorite(state.favorites.some((fav) => fav === item._id));
  }, [state.favorites, item._id]);

  return (
    <View
      style={[
        styles.card,
        format === "list" && styles.cardListFormat,
        customCardStyle,
      ]}
    >
      <BottomSheet
        bottomSheetContent={
          <RemoveFavoriteContent
            item={item}
            navigation={navigation}
            setBottomSheetVisibleRemoveFav={setBottomSheetVisibleRemoveFav}
          />
        }
        bottomSheetVisible={bottomSheetVisibleRemoveFav}
        setBottomSheetVisible={setBottomSheetVisibleRemoveFav}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.ESTATE_DETAILS, { _id: item._id });
        }}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={[styles.image, styles.imageListFormat, imageDimension]}
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
            {!isFavorite && (
              <Ionicons
                name={"heart-outline"}
                size={24}
                color={colors.white}
                onPress={() => {
                  setIsFavorite(true);
                  addToFavorites(item._id);
                }}
              />
            )}
            {isFavorite && (
              <Ionicons
                name={"heart"}
                size={24}
                color={colors.primaryOrange}
                onPress={() => {
                  setBottomSheetVisibleRemoveFav(true);
                }}
              />
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={[styles.details, detailsDimension]}>
        <View style={styles.texts}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.ESTATE_DETAILS, {
                  _id: item._id,
                });
              }}
            >
              <AppText
                numberOfLines={format === "list" ? 2 : 1}
                style={[
                  styles.firstText,
                  { marginTop: format === "grid" ? 8 : 0 },
                ]}
              >
                {item.name}
              </AppText>
            </TouchableOpacity>
            <AppText
              numberOfLines={format === "list" ? 2 : 1}
              style={styles.secondText}
            >
              {item.location}
            </AppText>
          </View>
          <AppText
            numberOfLines={1}
            style={[styles.footer, { detailsDimension }]}
          >
            <AppText style={[styles.f1, { marginTop: 10 }]}>
              &#8358;{utils.separateToThounsand(item.cost)}
            </AppText>
            <AppText style={styles.f2}>&nbsp;/&nbsp;{item.duration}</AppText>
          </AppText>
        </View>
      </View>
    </View>
  );
});

export default Card3;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
  },
  cardListFormat: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
  },

  details: {
    marginVertical: 5,
    marginHorizontal: 5,
    maxWidth: 200,
  },
  image: {
    borderRadius: 20,
    overflow: "hidden",
    maxHeight: 200,
    maxWidth: 200,
  },
  imageListFormat: {
    marginRight: 10,
  },
  f1: {
    color: colors.primaryColor,
    fontWeight: "bold",
    fontSize: 18,
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
    bottom: 0,
    right: 0,
    padding: 12,
    zIndex: defaultStyles.zIndex + 1,
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
