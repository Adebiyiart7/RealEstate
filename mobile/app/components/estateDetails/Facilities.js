import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

//LOCAL IMPORTS
import Icon from "../Icon";
import AppText from "../AppText";
import colors from "../../config/colors";
import { useTheme } from "../../contexts/ThemeContext";

const Facilities = ({ item }) => {
  const { state } = useTheme();
  const iconStyle = {
    fontSize: 26,
    color: colors[state.theme].primaryColor,
  };

  const icons = {
    parking: <Ionicons name="car-sport" style={iconStyle} />,
    swimming: <FontAwesome5 name="swimmer" style={iconStyle} />,
    gym: <MaterialCommunityIcons name="arm-flex" style={iconStyle} />,
    restaurant: <Ionicons name="restaurant" style={iconStyle} />,
    wifi: <MaterialCommunityIcons name="wifi" style={iconStyle} />,
    pet: <MaterialCommunityIcons name="dog-side" style={iconStyle} />,
    sport: <MaterialIcons name="sports-tennis" style={iconStyle} />,
    laundry: <MaterialIcons name="local-laundry-service" style={iconStyle} />,
  };

  return (
    <FlatList
      style={styles.container}
      scrollEnabled={false}
      data={item.facilities}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Icon size={60} Icon={icons[item.icon]} />
          <AppText style={styles.name} numberOfLines={1}>
            {item.name}
          </AppText>
        </View>
      )}
    />
  );
};

export default Facilities;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    width: 95,
  },
  name: {
    marginTop: 5,
    fontWeight: "500",
  },
});
