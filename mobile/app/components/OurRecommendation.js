import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Chip from "./Chip";
import Card3 from "./cards/Card3";
import { estateCategory, estates } from "../db";
import colors from "../config/colors";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import PropertyDisplayFormat from "./PropertyDisplayFormat";
import { useFavorite } from "../contexts/FavoriteHomeContext";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const OurRecommendation = ({
  navigation,
  categoryChipStyle,
  propertyCount,
}) => {
  const [focusedItem, setFocusedItem] = useState("All");
  const [displayFormat, setDisplayFormat] = useState("grid"); // list or grid
  const { state: favoriteState } = useFavorite();
  const { state: themeState } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <FlatList
        horizontal
        style={{ marginTop: 8, ...categoryChipStyle }}
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
        propertyCount={propertyCount}
        setDisplayFormat={setDisplayFormat}
      />
      <View style={defaultStyles.gridStyle}>
        {estates.map((item) => (
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
    </ScrollView>
  );
};

export default OurRecommendation;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
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
