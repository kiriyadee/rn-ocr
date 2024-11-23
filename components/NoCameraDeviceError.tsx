import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoCameraDeviceError: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>No Camera Device Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default NoCameraDeviceError;
