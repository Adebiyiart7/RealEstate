import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import colors from "../config/colors";

const ProcessStatus = ({ status, message, title, image, Actions }) => {
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
        <Image style={styles.image} source={image} />
        <AppText
          style={[
            styles.title,
            {
              color: status === "failure" ? colors.danger : colors.primaryColor
            }
          ]}
        >
          {title}
        </AppText>
        <AppText style={styles.text}>{message}</AppText>
        {!Actions && <AppText style={styles.time}>{time}</AppText>}
        <View style={styles.actions}>{Actions}</View>
      </View>
    </View>
  );
};

export default ProcessStatus;

const styles = StyleSheet.create({
  centerContainer: {
    display: "flex",
    alignItems: "center",
    minHeight: 350,
    minWidth: 250,
    maxWidth: 270,
    borderRadius: 40,
    padding: 16,
    backgroundColor: defaultStyles.colors.white
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1234,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099"
  },
  image: {
    // height: 165,
    // width: 140
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    color: defaultStyles.colors.mediumText
  },
  time: {
    fontWeight: "bold",
    fontSize: 16,
    color: defaultStyles.colors.primaryColor,
    marginTop: 20
  }
});
