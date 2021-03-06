import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "center",
    justifyContent: "center",
  },
});
