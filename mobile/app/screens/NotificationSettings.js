import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import MenuItem from "../components/MenuItem";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const NotificationSettingsScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [promoAndDiscount, setPromoAndDiscount] = useState(true);
  const [payments, setPayments] = useState(true);
  const [cashback, setCashback] = useState(true);
  const [appUpdates, setAppUpdates] = useState(false);
  const [newServiceAvailable, setNewServiceAvailable] = useState(false);
  const [newTipsAvailable, setNewTipsAvailable] = useState(false);

  const Switch = React.memo(({ state, setState }) => {
    return (
      <>
        {state ? (
          <Fontisto
            name="toggle-on"
            size={40}
            color={colors[state.theme].primaryColor}
            onPress={() => setState(!state)}
          />
        ) : (
          <Fontisto
            name="toggle-off"
            size={40}
            color={colors[state.theme].lightText}
            onPress={() => setState(!state)}
          />
        )}
      </>
    );
  });

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Notification Settings"}
      />
      <ScrollView style={styles.container}>
        <MenuItem
          style={styles.menuItem}
          title={"General Notification"}
          onPress={() => setGeneralNotification(!generalNotification)}
          RightIcon={
            <Switch
              state={generalNotification}
              setState={setGeneralNotification}
            />
          }
        />
        <MenuItem
          style={styles.menuItem}
          title={"Sound"}
          onPress={() => setSound(!sound)}
          RightIcon={<Switch state={sound} setState={setSound} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"Vibration"}
          onPress={() => setVibration(!vibration)}
          RightIcon={<Switch state={vibration} setState={setVibration} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"Special Offers"}
          onPress={() => setSpecialOffers(!specialOffers)}
          RightIcon={
            <Switch state={specialOffers} setState={setSpecialOffers} />
          }
        />
        <MenuItem
          style={styles.menuItem}
          title={"Promo & Discount"}
          onPress={() => setPromoAndDiscount(!promoAndDiscount)}
          RightIcon={
            <Switch state={promoAndDiscount} setState={setPromoAndDiscount} />
          }
        />
        <MenuItem
          style={styles.menuItem}
          title={"Payments"}
          onPress={() => setPayments(!payments)}
          RightIcon={<Switch state={payments} setState={setPayments} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"Cashback"}
          onPress={() => setCashback(!cashback)}
          RightIcon={<Switch state={cashback} setState={setCashback} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"App Updates"}
          onPress={() => setAppUpdates(!appUpdates)}
          RightIcon={<Switch state={appUpdates} setState={setAppUpdates} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"New Service Available"}
          onPress={() => setNewServiceAvailable(!newServiceAvailable)}
          RightIcon={
            <Switch
              state={newServiceAvailable}
              setState={setNewServiceAvailable}
            />
          }
        />
        <MenuItem
          style={styles.menuItem}
          title={"New Tips Available"}
          onPress={() => setNewTipsAvailable(!newTipsAvailable)}
          RightIcon={
            <Switch state={newTipsAvailable} setState={setNewTipsAvailable} />
          }
        />
      </ScrollView>
    </Screen>
  );
};

export default NotificationSettingsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  menuItem: {
    marginVertical: 12,
  },
});
