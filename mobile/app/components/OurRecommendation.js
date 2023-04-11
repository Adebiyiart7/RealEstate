import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

// LOCAL IMPORTS
import Chip from "./Chip";
import Card3 from "./cards/Card3";
import { estateCategory } from "../db";
import colors from "../config/colors";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import PropertyDisplayFormat from "./PropertyDisplayFormat";

const OurRecommendation = ({
  navigation,
  categoryChipStyle,
  propertyCount,
}) => {
  const [focusedItem, setFocusedItem] = useState("All");
  const [displayFormat, setDisplayFormat] = useState("grid"); // list or grid

  const { estates: rawEstates } = useSelector((state) => state.estate);

  let estates = [];

  for (let estate of rawEstates) {
    estates.push({
      _id: estate.zpid,
      category: estate.homeType,
      image: estate.imgSrc,
      longitude: estate.longitude,
      latitude: estate.latitude,
      city: estate.city,
      country: estate.country,
      location: estate.streetAddress,
      cost: estate.price,
      beds: estate.bedrooms,
      bath: estate.bathrooms,
      area: `${estate.lotAreaValue} ${estate.lotAreaUnit}`,
      name: "Adewale Hotels",
      duration: "night",
      rating: 4.7,
      reviewCount: 1234,
      owner: {
        name: "Chibuike Adewale Suleiman",
        image: require("../assets/images/avatar.jpg"),
        phone: "09029242729"
      },
      overview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      facilities: [
        { name: "Car Parking", icon: "parking" },
        { name: "Swimming Pool", icon: "swimming" },
        { name: "Gym & Fitness", icon: "gym" },
        { name: "Restaurant", icon: "restaurant" },
        { name: "Wi-fi & Network", icon: "wifi" },
        { name: "Pet Center", icon: "pet" },
        { name: "Sport Center", icon: "sport" },
        { name: "Laundry", icon: "laundry" }
      ],
      images: []
    });
  }
  
  /**
   * city, currency, country, homeType, imgSrc, price, state,streetAddress
   * lotAreaValue, lotAreaUnit, longitude, latitude, zipcode, zpid
   */

  return (
    <View style={styles.container}>
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
                        ? colors.white
                        : colors.primaryColor
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
            <Card3 navigation={navigation} format={displayFormat} item={item} />
          </View>
        ))}
      </View>
    </View>
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
