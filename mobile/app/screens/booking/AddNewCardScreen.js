import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// LOCAL IMPORTS
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import Screen from "../../components/Screen";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import Label from "../../components/form/Label";

const validationSchema = Yup.object().shape({
  cardName: Yup.string().required().min(4).max(255).label("Card Name"),
  cardNumber: Yup.string().required().min(16).label("Card Number"),
  expiryDate: Yup.string().required().min(4).max(50).label("Expiry Date"),
  cvv: Yup.string().required().length(3).label("CVV"),
});

const AddNewCardScreen = ({ navigation }) => {
  return (
    <Screen>
      <GoBackArrowHeader navigation={navigation} title={"Add New card"} />
      <View style={styles.card}>
        <Image source={require("../../assets/images/atm-card.png")} />
      </View>
      <Formik
        initialValues={{
          cardName: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({}) => (
          <View>
            <View>
              <Label style={styles.label} title={"Card Name"} />
              <AppFormField
                style={styles.inputField}
                name={"cardName"}
                placeholder="Card Name"
              />
            </View>
            <View>
              <Label style={styles.label} title={"Card Number"} />
              <AppFormField
                style={styles.inputField}
                name={"cardNumber"}
                placeholder="Card Number"
              />
            </View>
            <View style={styles.lastInputs}>
              <View style={styles.left}>
                <Label style={styles.label} title={"Expiry Date"} />
                <AppFormField
                  style={styles.inputField}
                  name={"expiryDate"}
                  placeholder="Expiry Date"
                />
              </View>
              <View style={styles.right}>
                <Label style={styles.label} title={"CVV"} />
                <AppFormField
                  style={styles.inputField}
                  name={"cvv"}
                  placeholder="CVV"
                />
              </View>
            </View>
            <SubmitButton title={"Add"} />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  inputField: {
    borderRadius: 5,
  },
  label: {
    marginTop: 10,
    marginBottom: -5,
  },
  lastInputs: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
  },
  left: {
    flex: 2,
    marginRight: 8,
  },
  right: {
    flex: 1,
    marginLeft: 8,
  },
});
