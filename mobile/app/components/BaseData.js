import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import { setUser } from "../features/auth/authSlice";

const BaseData = () => {
  const dispatch = useDispatch();

  AsyncStorage.getItem("@user")
    .then((value) => {
      // console.log(value);
      dispatch(setUser(JSON.parse(value)));
    })
    .catch((error) => {
      console.log(error);
    });

  return <></>;
};

export default BaseData;
