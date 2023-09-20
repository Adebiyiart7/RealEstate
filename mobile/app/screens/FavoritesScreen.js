import { FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import Screen from "../components/Screen";
import colors from "../config/colors";
import BottomSheet from "../components/BottomSheet";
import PropertiesFilterContent from "../components/PropertiesFilterContent";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Chip from "../components/Chip";
import Card3 from "../components/cards/Card3";
import { estateCategory, estates } from "../db";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import PropertyDisplayFormat from "../components/PropertyDisplayFormat";
import { useFavorite } from "../contexts/FavoriteHomeContext";
import utils from "../utils";
import { useTheme } from "../contexts/ThemeContext";

const FavoritesScreen = ({ navigation }) => {
  const { state: favoriteState } = useFavorite();
  const { state: themeState } = useTheme();
  const [focusedItem, setFocusedItem] = useState("All");
  const [displayFormat, setDisplayFormat] = useState("grid"); // list or grid
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const favoriteHomes = estates.filter((estate) =>
    favoriteState.favorites.includes(estate._id)
  );

  return (
    <Screen style={styles.container}>
      <BottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
        bottomSheetContent={<PropertiesFilterContent />}
      />

      <GoBackArrowHeader
        isTabScreen
        navigation={navigation}
        title={"Favorites"}
        RightIcon={
          <Ionicons
            size={24}
            name={"ios-search-outline"}
            style={{ colors: colors[themeState.theme].primaryText }}
          />
        }
        RightIconExtra={
          <Ionicons
            name="md-filter-outline"
            size={24}
            style={{ colors: colors[themeState.theme].primaryText }}
            onPress={() => setBottomSheetVisible(true)}
          />
        }
      />
      <View style={styles.container}>
        <FlatList
          horizontal
          style={{ marginTop: 0 }}
          showsHorizontalScrollIndicator={false}
          data={estateCategory}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View>
              <Chip
                text={item.name}
                focused={item.name === focusedItem}
                Icon={
                  item.icon && (
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={18}
                      color={
                        item.name === focusedItem
                          ? colors[themeState.theme].displayAsWhite
                          : colors[themeState.theme].primaryColor
                      }
                    />
                  )
                }
                onPress={() => setFocusedItem(item.name)}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
        />
        <PropertyDisplayFormat
          displayFormat={displayFormat}
          propertyCount={`${favoriteState.favorites.length} ${utils.pluralize(
            favoriteState.favorites.length,
            "favorite"
          )}`}
          setDisplayFormat={setDisplayFormat}
        />
        <View style={defaultStyles.gridStyle}>
          {favoriteHomes.map((item) => (
            <View key={item._id}>
              <Card3
                navigation={navigation}
                format={displayFormat}
                item={item}
                state={favoriteState}
              />
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  featuredView: {
    marginTop: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ourRecommendation: {
    marginBottom: 16,
    marginTop: 20,
  },
  seperator: {
    marginRight: 10,
  },
});
