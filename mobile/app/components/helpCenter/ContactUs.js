import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../../config/colors";
import AppText from "../AppText";
import { useTheme } from "../../contexts/ThemeContext";

const ContactUs = () => {
  const { state } = useTheme();
  const Item = React.memo(({ icon, title }) => (
    <TouchableOpacity style={[styles.item, styles.itemTheme[state.theme]]}>
      <MaterialCommunityIcons
        name={icon}
        color={colors[state.theme].primaryColor}
        size={25}
      />
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  ));

  return (
    <ScrollView>
      <Item title={"Customer Service"} icon={"headset"} />
      <Item title={"WhatsApp"} icon={"whatsapp"} />
      <Item title={"Website"} icon={"web"} />
      <Item title={"Facebook"} icon={"facebook"} />
      <Item title={"Twitter"} icon={"twitter"} />
      <Item title={"Instagram"} icon={"instagram"} />
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 10,
    borderRadius: 16,
  },
  itemTheme: {
    light: {
      backgroundColor: colors.light.background200,
    },
    dark: {
      backgroundColor: colors.dark.background200,
    },
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 16,
  },
});
