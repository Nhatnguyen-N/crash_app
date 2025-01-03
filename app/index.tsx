import { View, Text, StyleSheet } from "react-native";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-2xl font-pblack">Nhatt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
