import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
const SigninScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>

    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
