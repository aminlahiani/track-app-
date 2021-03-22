import React from "react";
import { View, StyleSheet, Text  , Button} from "react-native";
import { useNavigation } from "@react-navigation/core";
const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <Text style={{ fontSize: 48 }}>SignupScreen</Text>
    <Button
    title="Go to main flow"
    onPress={() => navigation.navigate("mainFlow")}
  />
  <Button
    title="Go to Signin flow"
    onPress={() => navigation.navigate("Signin")}
  />
  </>
  )

};

const styles = StyleSheet.create({});

export default SignupScreen;
