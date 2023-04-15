import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import { setUser } from "../features/auth/authSlice";
import { getEstates } from "../features/estate/estateSlice";

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
  
  useEffect(() => {
    dispatch(getEstates())
  },[])

  return <></>;
};

export default BaseData;
