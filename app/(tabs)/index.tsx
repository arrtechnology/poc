import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";

import {
  PlayInstallReferrer,
  PlayInstallReferrerInfo,
} from "react-native-play-install-referrer";

export default function TabOneScreen() {
  const [referrer, setReferrer] = useState<PlayInstallReferrerInfo | null>();

  const getReferrer = async () => {
    PlayInstallReferrer.getInstallReferrerInfo((installReferrerInfo, error) => {
      if (!error) {
        setReferrer(installReferrerInfo);
        console.log("Install referrer info:", installReferrerInfo);
        console.log(
          "Install referrer = " + installReferrerInfo?.installReferrer
        );
        console.log(
          "Referrer click timestamp seconds = " +
            installReferrerInfo?.referrerClickTimestampSeconds
        );
        console.log(
          "Install begin timestamp seconds = " +
            installReferrerInfo?.installBeginTimestampSeconds
        );
        console.log(
          "Referrer click timestamp server seconds = " +
            installReferrerInfo?.referrerClickTimestampServerSeconds
        );
        console.log(
          "Install begin timestamp server seconds = " +
            installReferrerInfo?.installBeginTimestampServerSeconds
        );
        console.log("Install version = " + installReferrerInfo?.installVersion);
        console.log(
          "Google Play instant = " + installReferrerInfo?.googlePlayInstant
        );
      } else {
        console.log("Failed to get install referrer info!");
        console.log("Response code: " + error?.responseCode);
        console.log("Message: " + error?.message);
      }
    });
  };

  useEffect(() => {
    getReferrer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected code is : {referrer?.installReferrer}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
