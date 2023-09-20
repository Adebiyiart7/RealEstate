import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import MenuItem from "../components/MenuItem";
import colors from "../config/colors";
import languages from "../config/languages";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";
import AppText from "../components/AppText";
import { useTheme } from "../contexts/ThemeContext";

const LanguageScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [activeLanguage, setActiveLanguage] = useState(languages[0].name);

  const Switch = React.memo(({ language }) => {
    return (
      <>
        {language.available ? (
          language.name === activeLanguage ? (
            <MaterialCommunityIcons
              name="radiobox-marked"
              size={24}
              color={colors[state.theme].primaryColor}
              onPress={() => setActiveLanguage(language.name)}
            />
          ) : (
            <MaterialCommunityIcons
              name="radiobox-blank"
              size={24}
              color={colors[state.theme].primaryColor}
              onPress={() => setActiveLanguage(language.name)}
            />
          )
        ) : (
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={24}
            color={colors[state.theme].lightText}
            style={{ opacity: 0.6 }}
          />
        )}
      </>
    );
  });

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader navigation={navigation} title={"Language"} />
      <ScrollView style={styles.container}>
        <View style={styles.suggested}>
          <AppText style={styles.title}>Suggested</AppText>
          {languages
            .filter((language) => language.suggested === true)
            .map((language) => (
              <View key={language._id}>
                <MenuItem
                  activeOpacity={1}
                  disabled={!language.available}
                  style={styles.menuItem}
                  title={language.name}
                  RightIcon={<Switch language={language} />}
                />
              </View>
            ))}
        </View>
        <ItemSeparatorComponent style={{ marginVertical: 5 }} />
        <View>
          <AppText style={styles.title}>Language</AppText>
          {languages
            .filter((language) => language.suggested !== true)
            .map((language) => (
              <View key={language._id}>
                <MenuItem
                  activeOpacity={1}
                  disabled={!language.available}
                  style={styles.menuItem}
                  title={language.name}
                  RightIcon={<Switch language={language} />}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  menuItem: {
    marginVertical: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 5,
  },
});
