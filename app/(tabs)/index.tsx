import { Text, View } from "@/components/Themed";
import React from "react";
import { StyleSheet } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

import EditScreenInfo from "@/components/EditScreenInfo";
import NoCameraDeviceError from "@/components/NoCameraDeviceError";

import PermissionsPage from "@/components/PermissionPage";
import { Camera } from "react-native-vision-camera";

export default function TabOneScreen() {
  const device = useCameraDevice("back");
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <NoCameraDeviceError />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <CameraView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const CameraView = () => {
  const device = useCameraDevice("back");

  if (device == null) return <NoCameraDeviceError />;

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};
