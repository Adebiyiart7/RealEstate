import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import OurRecommendation from "../components/OurRecommendation";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import Screen from "../components/Screen";
import colors from "../config/colors";
import BottomSheet from "../components/BottomSheet";
import PropertiesFilterContent from "../components/PropertiesFilterContent";
import RemoveFavoriteContent from "../components/RemoveFavoriteContent";

const FavoritesScreen = ({ navigation }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetVisibleRemoveFav, setBottomSheetVisibleRemoveFav] = useState(true);

  return (
    <Screen style={styles.container}>
      <BottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
        bottomSheetContent={<PropertiesFilterContent />}
      />
      <BottomSheet
        bottomSheetContent={
          <RemoveFavoriteContent
            setBottomSheetVisibleRemoveFav={setBottomSheetVisibleRemoveFav}
          />
        }
        bottomSheetVisible={bottomSheetVisibleRemoveFav}
        setBottomSheetVisible={setBottomSheetVisibleRemoveFav}
      />
      <GoBackArrowHeader
        navigation={navigation}
        title={"Favorites"}
        RightIcon={
          <Ionicons
            size={24}
            name={"ios-search-outline"}
            style={{ colors: colors.primaryText }}
          />
        }
        RightIconExtra={
          <Ionicons
            name="md-filter-outline"
            size={24}
            style={{ colors: colors.primaryText }}
            onPress={() => setBottomSheetVisible(true)}
          />
        }
      />
      <OurRecommendation
        categoryChipStyle={{ marginTop: 0 }}
        propertyCount={"2484 favorites"}
      />
    </Screen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
