import React from "react";
import moment from "moment";
import { StyleSheet, TextInput, View, Text } from "react-native";
import DateRangePicker from "react-native-daterange-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import Screen from "../../components/Screen";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";
import LoginBottomSheet from "../../components/LoginBottomSheet";
import { TouchableOpacity } from "react-native-gesture-handler";

class BookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      startDate: new Date(1611106322840),
      endDate: new Date(1671706322840),
      displayedDate: moment(),
      bottomSheetVisible: false,
      openDate: false,
      noteToOwner:
        "I would like to know if there are extra charges apart from the tax and security",
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  setBottomSheetVisible = () => {
    this.setState({
      bottomSheetVisible: true,
    });
  };

  setOpenDate = () => {
    // this.setState({
    //   openDate: true,
    // });
  };

  handleChangeNoteToOwner = (text) => {
    this.setState({
      noteToOwner: text,
    });
  };

  render() {
    const {
      startDate,
      endDate,
      displayedDate,
      props,
      bottomSheetVisible,
      navigation,
      openDate,
      noteToOwner,
    } = this.state;

    const Header = ({ title }) => {
      return <AppText style={styles.header}>{title} </AppText>;
    };
    const empty = "";
    
    return (
      <>
        {/* <DateRangePicker
          open={openDate}
          headerTextStyle={{ fontWeight: "bold" }}
          selectedStyle={{ backgroundColor: colors.primaryColor }}
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          containerStyle={styles.calendarStyle}
          range
        >
        </DateRangePicker> */}

        <Screen style={styles.container}>
          <LoginBottomSheet
            bottomSheetVisible={bottomSheetVisible}
            setBottomSheetVisible={this.setBottomSheetVisible}
          />
          <GoBackArrowHeader
            navigation={navigation}
            title={"Booking Real Estate"}
          />
          {/* <View style={styles.calendar}></View> */}

          {/* DATE RANGE */}
          <View style={styles.checks}>
            <View style={styles.left}>
              <Header title={"Check In"} />
              <TouchableOpacity
                style={styles.input}
                onPress={() => this.setOpenDate()}
              >
                <AppText>
                  {startDate && moment(startDate).format("DD-MM-YYYY")}
                </AppText>
                <MaterialCommunityIcons
                  name="calendar"
                  color={colors.mediumText}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <Header title={"Check Out"} />
              <View style={styles.input}>
                <AppText>
                  {endDate && moment(endDate).format("DD-MM-YYYY")}
                </AppText>
                <MaterialCommunityIcons
                  name="calendar"
                  color={colors.mediumText}
                  size={20}
                />
              </View>
            </View>
          </View>

          {/* NOTE */}
          <View style={{ marginTop: 16 }}>
            <Header title={"Note to Owner (Optional)"} />

            <TextInput
              placeholder="Write to the owner..."
              style={styles.noteInput}
              name={"note"}
              numberOfLines={3}
              multiline
              onChangeText={(text) => this.handleChangeNoteToOwner(text)}
              value={noteToOwner}
            />
            <AppButton
              onPress={() => {
                props.route.params.user
                  ? props.navigation.navigate(routes.BOOKING_FORM, {
                      _id: props.route.params._id,
                      checksDetails: {
                        startDate: startDate,
                        endDate: endDate
                      }
                    })
                  : this.setBottomSheetVisible;
              }}
            >
              Continue
            </AppButton>
          </View>
        </Screen>
      </>
    );
  }
}

export default BookingScreen;

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarStyle: {},
  checks: {
    display: "flex",
    flex: 10,
    flexDirection: "row",
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: colors.background100,
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
    backgroundColor: colors.background100,
    padding: 16,
    fontSize: 16,
    color: colors.primaryText,
  },
});
