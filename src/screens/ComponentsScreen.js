import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Piyush"
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native! </Text>
      <Text style={{fontSize: 20, marginTop: 16}}> My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: 'blue',
  },
});

export default ComponentsScreen;
