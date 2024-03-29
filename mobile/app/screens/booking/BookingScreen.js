import React, { useState } from "react";
import moment from "moment";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import Screen from "../../components/Screen";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";
import LoginBottomSheet from "../../components/LoginBottomSheet";
import { useTheme } from "../../contexts/ThemeContext";

const BookingScreen = ({ route, navigation }) => {
  const { state } = useTheme();
  const [startDate] = useState(new Date(1611106322840));
  const [endDate] = useState(new Date(1671706322840));
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [noteToOwner, setNoteToOwner] = useState(
    "I would like to know if there are extra charges apart from the tax and security"
  );

  const handleChangeNoteToOwner = (text) => setNoteToOwner(text);

  const Header = ({ title }) => {
    return <AppText style={styles.header}>{title} </AppText>;
  };
  console.log(route);
  return (
    <Screen scrollable={false} style={styles.container}>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <GoBackArrowHeader
        navigation={navigation}
        title={"Booking Real Estate"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* DATE RANGE */}
        <View style={styles.checks}>
          <View style={styles.left}>
            <Header title={"Check In"} />
            <TouchableOpacity
              style={[
                styles.input,
                { backgroundColor: colors[state.theme].background200 },
              ]}
              // onPress={() => setOpenDate()}
            >
              <AppText>
                {startDate && moment(startDate).format("DD-MM-YYYY")}
              </AppText>
              <MaterialCommunityIcons
                name="calendar"
                color={colors[state.theme].mediumText}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <Header title={"Check Out"} />
            <TouchableOpacity
              style={[
                styles.input,
                { backgroundColor: colors[state.theme].background200 },
              ]}
            >
              <AppText>
                {endDate && moment(endDate).format("DD-MM-YYYY")}
              </AppText>
              <MaterialCommunityIcons
                name="calendar"
                color={colors[state.theme].mediumText}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* NOTE */}
        <View style={{ marginTop: 16 }}>
          <Header title={"Note to Owner (Optional)"} />

          <TextInput
            placeholder="Write to the owner..."
            style={[
              styles.noteInput,
              {
                color: colors[state.theme].primaryText,
                backgroundColor: colors[state.theme].background200,
              },
            ]}
            name={"note"}
            numberOfLines={3}
            multiline
            onChangeText={(text) => handleChangeNoteToOwner(text)}
            value={noteToOwner}
          />
        </View>
      </ScrollView>
      <AppButton
        rounded
        style={{ marginTop: "auto" }}
        onPress={() => {
          route.params.user
            ? navigation.navigate(routes.BOOKING_FORM, {
                _id: route.params._id,
                checksDetails: {
                  startDate: startDate,
                  endDate: endDate,
                },
              })
            : setBottomSheetVisible;
        }}
      >
        Continue
      </AppButton>
    </Screen>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarStyle: {},
  checks: {
    flexDirection: "row",
    marginTop: 16,
  },
  container: {
    paddingBottom: 16,
  },
  header: {
    fontWeight: "bold",
    fontSize: 17,
  },
  input: {
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  left: {
    flex: 5,
    alignSelf: "flex-start",
    marginRight: 8,
  },
  right: {
    flex: 5,
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  noteInput: {
    marginVertical: 10,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
  },
});
