import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import { setUser } from "../features/auth/authSlice";

const BaseData = () => {
  const dispatch = useDispatch();

  AsyncStorage.getItem("user").then((value) => {
    dispatch(setUser(JSON.parse(value)));
    console.log(value);
  });

  return <></>;
};

export default BaseData;
