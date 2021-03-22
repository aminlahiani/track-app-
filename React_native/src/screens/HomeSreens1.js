import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen1() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="clic me" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default HomeScreen1;
