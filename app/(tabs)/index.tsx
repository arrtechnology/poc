import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { useEffect } from "react";

export default function TabOneScreen() {
  useEffect(() => {
    const checkDeferredDeepLink = async () => {
      const deferredDeepLink = await AsyncStorage.getItem("deferredDeepLink");
      if (deferredDeepLink) {
        console.log("Deferred deep link found", deferredDeepLink);
        // Handle the deep link
        router.navigate(deferredDeepLink);
        await AsyncStorage.removeItem("deferredDeepLink");
      } else {
        console.log("No deferred deep link found");
      }
    };

    checkDeferredDeepLink();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
