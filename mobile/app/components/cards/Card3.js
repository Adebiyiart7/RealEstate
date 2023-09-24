import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import routes from "../../config/routes";
import utils from "../../utils";
import defaultStyles from "../../config/styles";
import { useFavorite } from "../../contexts/FavoriteHomeContext";
import BottomSheet from "../BottomSheet";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";
import RemoveFavoriteContent from "../RemoveFavoriteContent";

const LIST = "list";

const Card3 = React.memo(({ navigation, item, format, customCardStyle }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const { addToFavorites, state: favoriteState } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  const [bottomSheetVisibleRemoveFav, setBottomSheetVisibleRemoveFav] =
    useState(false);
  const dimension = useWindowDimensions();

  const imageDimension = {
    height:
      format === LIST ? dimension.width / 2.4 - 32 : dimension.width / 2 - 32,
    width:
      format === LIST ? dimension.width / 2.4 - 32 : dimension.width / 2 - 32,
  };

  const detailsDimension = {
    width:
      format === LIST
        ? dimension.width - imageDimension.width - 48
        : dimension.width / 2 - 32,
  };

  useEffect(() => {
    setIsFavorite(favoriteState.favorites.some((fav) => fav === item._id));
  }, [favoriteState.favorites, item._id]);

  const iconColor = colors[state.theme].primaryOrange;
  const firstTextStyles = isLight
    ? styles.firstTextLight
    : styles.firstTextDark;
  const f1Styles = isLight ? styles.f1Light : styles.f1Dark;
  const f2Styles = isLight ? styles.f2Light : styles.f2Dark;
  const ratingStyles = isLight ? styles.ratingLight : styles.ratingDark;

  return (
    <View
      style={[
        styles.card,
        format === LIST && styles.cardListFormat,
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
          style={[
            styles.image,
            { marginRight: format === LIST ? 10 : 0 },
            imageDimension,
          ]}
        >
          <AppText style={[styles.rating, ratingStyles]}>
            <MaterialCommunityIcons name="star" size={12} color={iconColor} />
            {item.rating}
          </AppText>
          <View style={styles.heartIcon}>
            {!isFavorite && (
              <Ionicons
                name={"heart-outline"}
                size={24}
                color={
                  isLight
                    ? colors.light.displayAsWhite
                    : colors.dark.displayAsWhite
                }
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
                color={iconColor}
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
                numberOfLines={format === LIST ? 2 : 1}
                style={[
                  styles.firstText,
                  firstTextStyles,
                  { marginTop: format === "grid" ? 8 : 0 },
                ]}
              >
                {item.name}
              </AppText>
            </TouchableOpacity>
            <AppText
              numberOfLines={format === LIST ? 2 : 1}
              style={{
                color: isLight
                  ? colors.light.mediumText
                  : colors.dark.mediumText,
              }}
            >
              {item.location}
            </AppText>
          </View>
          <AppText
            numberOfLines={1}
            style={[styles.footer, { detailsDimension }]}
          >
            <AppText style={[styles.f1, f1Styles, { marginTop: 10 }]}>
              &#8358;{utils.separateToThounsand(item.cost)}
            </AppText>
            <AppText style={[styles.f2, f2Styles]}>
              &nbsp;/&nbsp;{item.duration}
            </AppText>
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
    // padding: 8,
    borderRadius: 20,
  },
  cardListFormat: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
  },

  details: {
    marginVertical: 5,
    // marginHorizontal: 5,
    maxWidth: 200,
  },
  image: {
    borderRadius: 20,
    overflow: "hidden",
    maxHeight: 200,
    maxWidth: 200,
  },
  f1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  f1Light: {
    color: colors.light.primaryColor,
  },
  f1Dark: {
    color: colors.dark.primaryColor,
  },
  f2: {
    width: "50%",
  },
  f2Light: {
    color: colors.light.mediumText,
  },
  f2Dark: {
    color: colors.dark.mediumText,
  },
  firstText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  firstTextLight: {
    color: colors.light.primaryText,
  },
  firstTextDark: {
    color: colors.dark.primaryText,
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
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 9,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: "bold",
  },
  ratingLight: {
    backgroundColor: colors.light.white,
    color: colors.light.primaryColor,
  },
  ratingDark: {
    backgroundColor: colors.dark.white,
    color: colors.dark.primaryColor,
  },
  texts: { display: "flex", flex: 1, justifyContent: "space-between" },
});
