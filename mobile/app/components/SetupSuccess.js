import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const SetupSuccess = () => {
  const [time, setTime] = useState();

  let counter = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(`00:0${counter}`);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, [counter]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/setup-success-image.png")}
        />
        <AppText style={styles.congrats}>Congratulations!</AppText>
        <AppText style={styles.text}>
          Your account is ready to use. You will be redirected to the Home Page
          in a few seconds
        </AppText>
        <AppText style={styles.time}>{time}</AppText>
      </View>
    </View>
  );
};

export default SetupSuccess;

const styles = StyleSheet.create({
  centerContainer: {
    display: "flex",
    alignItems: "center",
    height: 350,
    width: 250,
    borderRadius: 40,
    padding: 16,
    backgroundColor: defaultStyles.colors.white
  },
  congrats: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    color: defaultStyles.colors.primaryColor
  },
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "1234",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099"
  },
  image: {
    height: 165,
    width: 140
  },
  text:{ textAlign: "center", marginTop: 10, color: defaultStyles.colors.mediumText },
  time: {
    fontWeight: "bold",
    fontSize: 16,
    color: defaultStyles.colors.primaryColor,
    marginTop: 20,
  },
});
