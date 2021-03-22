import React from 'react';
import { View, StyleSheet, Text , Button } from 'react-native';
import { useNavigation } from "@react-navigation/core";
const TrackListScreen = () => {
  const navigation = useNavigation();
  return(
    <>
    <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    <Button
        title="Go to TrackDetail flow"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  )
  
};

const styles = StyleSheet.create({});

export default TrackListScreen;
