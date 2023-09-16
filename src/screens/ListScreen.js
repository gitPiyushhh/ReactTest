import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Friend1"},
    { name: "Friend2"},
    { name: "Friend3"},
    { name: "Friend4"},
    { name: "Friend5"},
    { name: "Friend6"},
    { name: "Friend7"},
    { name: "Friend8"},
    { name: "Friend9"},
    { name: "Friend10"},
  ];
  return (
    <FlatList
    keyExtractor={(friend) => friend.name }
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
