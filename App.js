import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Todoapp from "./components/Todoapp";
import Instaapp from "./components/Instaapp";
import Newsapp from "./components/Newsapp";
import Messageapp from "./components/Messageapp";

export default function App() {
  return (
    <View style={styles.container}>
      <Todoapp />
      {/* <Instaapp /> */}
      {/* <Newsapp /> */}
      {/* <Messageapp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
