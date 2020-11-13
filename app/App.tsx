import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
  },
});

const App: React.FunctionComponent = (): JSX.Element => (
  <View style={styles.container}>
    <Text>Hello world!</Text>
    <StatusBar style="auto" />
  </View>
);

export default App;
