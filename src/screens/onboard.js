import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../components/Globalstyle";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding1}>
      <View style={styles.frameParent}>
        <View style={styles.nofapParent}>
          <Text style={styles.nofap}>NOFAP</Text>
          <Text style={[styles.membantuPenggunaUntuk, styles.lewatiTypo]}>
            Membantu pengguna untuk mengendalikan kebiasaan masturbasi
          </Text>
        </View>
        <View style={styles.ellipseParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
      </View>
      <Text style={[styles.lewati, styles.lewatiTypo]}>Lewati</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lewatiTypo: {
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.text14Text1402_size,
  },
  frameLayout: {
    height: 10,
    width: 10,
  },
  nofap: {
    fontSize: FontSize.heading228Heading22804_size,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "left",
    color: Color.primaryBaseColor,
  },
  membantuPenggunaUntuk: {
    width: 328,
    marginTop: 12,
    color: Color.primaryBaseColor,
  },
  nofapParent: {
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.primary950,
  },
  frameItem: {
    backgroundColor: Color.colorGray,
    marginLeft: 10,
  },
  ellipseParent: {
    flexDirection: "row",
    marginTop: 36,
  },
  frameParent: {
    top: 354,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  lewati: {
    top: 48,
    left: 299,
    color: Color.secondaryInfo,
    position: "absolute",
  },
  onboarding1: {
    backgroundColor: Color.naturalLightMode,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Onboarding1;
