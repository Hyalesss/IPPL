import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import {
  Color,
  FontSize,
} from "../components/Globalstyle";
import Buttonfap from '../components/buttonfap'

const Mainmenuu = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.halloTeman, styles.halloTemanFlexBox]}>
            Hallo, Teman
          </Text>
          <Text style={styles.janganLupaJaga}>Jangan lupa jaga kesehatan</Text>
        </View>
        <Image
          style={[styles.materialSymbolsmodeNightOuIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/night_light_mode.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.pendeteksiKontenParent}>
          <Text style={[styles.pendeteksiKonten, styles.halloTemanFlexBox]}>
            Pendeteksi Konten
          </Text>
          <Text style={styles.janganLupaJaga}>
            Mendapatkan notifikasi real-time
          </Text>
        </View>
        <Buttonfap
          ellipse4={require("../assets/tombolmati.png")}
          property1Frame18Position="unset"
          property1Frame18MarginLeft={8}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameFlexBox]}>
        <Pressable
          style={[
            styles.edukasiKesehatanParent,
            styles.onOfBarMockupSpaceBlock,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.edukasiKesehatan}>{`Edukasi 
Kesehatan`}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/tdesign_book.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.edukasiKesehatanParent,
            styles.onOfBarMockupSpaceBlock,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.edukasiKesehatan}>{`Catatan
Harian`}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ph_pen.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  halloTemanFlexBox: {
    textAlign: "left",
    color: Color.primaryBaseColor,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameFlexBox: {
    marginTop: 32,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  onOfBarMockupSpaceBlock: {
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  halloTeman: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "600",
  },
  janganLupaJaga: {
    fontSize: FontSize.text12Text1201_size,
    lineHeight: 14,
    marginTop: 8,
    textAlign: "left",
    color: Color.primaryBaseColor,
  },
  materialSymbolsmodeNightOuIcon: {
    marginLeft: 130,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  pendeteksiKonten: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "700",
  },
  pendeteksiKontenParent: {
    justifyContent: "center",
    flex: 1,
  },
  onOfBarMockupChild: {
    width: 32,
    height: 32,
  },
  onOfBarMockup: {
    backgroundColor: Color.primary100,
    width: 100,
    paddingVertical: 8,
    marginLeft: 8,
    justifyContent: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  edukasiKesehatan: {
    fontSize: FontSize.text14Text1401_size,
    lineHeight: 22,
    color: Color.naturalLightMode,
    alignSelf: "stretch",
    textAlign: "left",
  },
  edukasiKesehatanParent: {
    backgroundColor: Color.naturalWhiteText,
    width: 156,
    height: 150,
    paddingVertical: 12,
    alignItems: "flex-end",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  frameContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  homeScreen: {
    backgroundColor: Color.naturalLightMode,
    width: "100%",
    height: 800,
    paddingHorizontal: 12,
    paddingVertical: 48,
    overflow: "hidden",
    flex: 1,
  },
});

export default Mainmenuu;
