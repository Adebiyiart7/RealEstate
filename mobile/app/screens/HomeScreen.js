import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AccountCard from "../components/cards/AccountCard";
import colors from "../config/colors";
import SearchBox from "../components/form/SearchBox";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import Card2 from "../components/cards/Card2";
import { featured } from "../db";
import BottomSheet from "../components/BottomSheet";
import PropertiesFilterContent from "../components/PropertiesFilterContent";
import routes from "../config/routes";
import OurRecommendation from "../components/OurRecommendation";
import SeeAllText from "../components/SeeAllText";
import Loading from "../components/Loading";

const Header = ({ title, right, onPressRight }) => {
  return (
    <View style={styles.header}>
      <AppText style={styles.headerTitle}>{title}</AppText>
      <TouchableOpacity onPress={onPressRight}>{right}</TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  // const [loading, setLoading] = useState(true);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { user } = useSelector(state => state.auth);

  return (
    <Screen style={styles.screen}>
      {/* <Loading visible={loading} /> */}
      <AccountCard
        reverse
        Icon1={
          <Ionicons
            name="notifications-outline"
            color={colors.mediumText}
            size={24}
          />
        }
        first_text={user ? user.fullname || user.username : "Welcome!"}
        second_text={`Good Morning`}
        avatar={require("../assets/images/avatar.jpg")}
      />
      <SearchBox
        onPressFilter={() => setBottomSheetVisible(true)}
        RightIcon={
          <Ionicons
            name="md-filter-sharp"
            color={colors.primaryColor}
            size={18}
          />
        }
      />
      <View style={styles.featuredView}>
        <BottomSheet
          bottomSheetVisible={bottomSheetVisible}
          setBottomSheetVisible={setBottomSheetVisible}
          bottomSheetContent={<PropertiesFilterContent />}
        />
        <Header title="Featured" right={<SeeAllText />} />
        <FlatList
          data={featured}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View key={item._id}>
              <Card2 item={item} />
            </View>
          )}
          ItemSeparatorComponent={() => <AppText style={{ marginRight: 16 }} />}
        />
      </View>

      {/* Our Recommendation */}
      <View>
        <View style={styles.ourRecommendation}>
          <Header
            title="Our Recommendation"
            onPressRight={() => navigation.navigate(routes.OUR_RECOMMENDATION)}
            right={<SeeAllText />}
          />
          <OurRecommendation navigation={navigation} />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  featuredView: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  headerTitle: {
    fontWeight: "bold",
    color: defaultStyles.colors.primaryText,
    fontSize: 17,
    marginBottom: 12
  },
  ourRecommendation: {
    marginTop: 16
  },
  screen: {
    paddingTop: 16
  }
});
