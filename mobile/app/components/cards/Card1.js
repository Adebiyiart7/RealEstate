import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const Card1 = React.memo(({ Icon, title, subTitle, selected, onPress }) => {
  const selectedStyles = {
    borderWidth: 2,
    borderColor: colors.primaryColor,
  };
  return (
    <Pressable
      onPress={onPress}
      style={{ ...styles.card, ...(selected && selectedStyles) }}
    >
      <View style={styles.icon}>{Icon}</View>
      <View style={styles.center}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
      {selected ? (
        <MaterialCommunityIcons style={styles.radio} name="radiobox-marked" />
      ) : (
        <MaterialCommunityIcons style={styles.radio} name="radiobox-blank" />
      )}
    </Pressable>
  );
});

export default Card1;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.border200,
    padding: 16,
    alignItems: "center",
    marginVertical: 8,
  },
  icon: {
    backgroundColor: colors.background200,
    borderRadius: 50,
    padding: 20,
    marginRight: 10,
  },
  radio: {
    color: colors.primaryColor,
    fontSize: 24,
    position: "absolute",
    right: 20,
  },
  center: {
    display: "flex",
    flexDirection: "column",
  },
  subTitle: {
    maxWidth: 180,
    fontWeight: "600",
  },
  title: {
    fontSize: 12,
    color: colors.mediumText,
  },
});
