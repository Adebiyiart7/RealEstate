import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AccountCard from "../components/cards/AccountCard";
import colors from "../config/colors";
import SearchBox from "../components/form/SearchBox";
import AppText from "../components/AppText";
import Card2 from "../components/cards/Card2";
import { featured } from "../db";
import BottomSheet from "../components/BottomSheet";
import PropertiesFilterContent from "../components/PropertiesFilterContent";
import routes from "../config/routes";
import OurRecommendation from "../components/OurRecommendation";
import SeeAllText from "../components/SeeAllText";
import LoginBottomSheet from "../components/LoginBottomSheet";
import FillProfileBottomSheet from "../components/FillProfileBottomSheet";
import { profile as setProfile } from "../features/profile/profileSlice";
import AppButton from "../components/AppButton";
import { useTheme } from "../contexts/ThemeContext";
import Loading from "../components/Loading";

const Header = ({ title, right, onPressRight }) => {
  const { state } = useTheme();

  return (
    <View style={styles.header}>
      <AppText
        style={[styles.headerTitle, { color: colors[state.theme].primaryText }]}
      >
        {title}
      </AppText>
      <TouchableOpacity onPress={onPressRight}>{right}</TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const { state } = useTheme();
  // const [loading, setLoading] = useState(true);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetVisibleLogin, setBottomSheetVisibleLogin] = useState(false);
  const [bottomSheetVisibleProfile, setBottomSheetVisibleProfile] =
    useState(false);

  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (!user) setBottomSheetVisibleLogin(true);
    }, 2000);
  }, [user, setBottomSheetVisibleLogin]);

  useEffect(() => {
    if (user) dispatch(setProfile(user.token));
    // if (user && !profile) setBottomSheetVisibleProfile(true); // TODO: Uncomment
  }, [user, profile, dispatch]);

  const name = () => {
    if (profile) {
      if (profile?.fullname) return profile.fullname;
    } else if (user) {
      return user.username;
    }

    return null;
  };

  return (
    <Screen scrollable={false} style={styles.screen}>
      {/* <Loading visible={loading} /> */}
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisibleLogin}
        setBottomSheetVisible={setBottomSheetVisibleLogin}
      />
      <FillProfileBottomSheet
        bottomSheetVisible={bottomSheetVisibleProfile}
        setBottomSheetVisible={setBottomSheetVisibleProfile}
      />
      {!user && (
        <AppButton onPress={() => navigation.navigate(routes.LOGIN)}>
          SIGN IN
        </AppButton>
      )}
      <AccountCard
        reverse
        showIconBorder={user ? true : false}
        Icon={
          user && (
            <Ionicons
              name="notifications-outline"
              color={colors[state.theme].mediumText}
              size={24}
              onPress={() => {
                navigation.navigate(routes.NOTIFICATIONS);
              }}
            />
          )
        }
        first_text={name() ? name() : "Welcome!"}
        second_text={`Good Morning`}
        avatar={require("../assets/images/avatar.jpg")}
      />
      <SearchBox
        onPressFilter={() => setBottomSheetVisible(true)}
        RightIcon={
          <Ionicons
            style={{ marginRight: 20 }}
            name="md-filter-sharp"
            color={colors[state.theme].primaryColor}
            size={18}
          />
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.featuredView}>
              <BottomSheet
                bottomSheetVisible={bottomSheetVisible}
                setBottomSheetVisible={setBottomSheetVisible}
                bottomSheetContent={<PropertiesFilterContent />}
              />
              <Header title="Featured" />
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
                ItemSeparatorComponent={() => (
                  <AppText style={{ marginRight: 16 }} />
                )}
              />
            </View>

            {/* Our Recommendation */}

            <View style={styles.ourRecommendation}>
              <Header
                title="Our Recommendation"
                onPressRight={() =>
                  navigation.navigate(routes.OUR_RECOMMENDATION)
                }
                right={<SeeAllText />}
              />
              <OurRecommendation
                navigation={navigation}
                propertyCount={"2484 found"}
              />
            </View>

            {!user && <View style={{ marginBottom: 50 }} />}
          </>
        }
      />
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
    marginTop: 10,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 12,
  },
  ourRecommendation: {
    marginTop: 16,
  },
  screen: {
    paddingTop: Constants.statusBarHeight + 10,
  },
});
