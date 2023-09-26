import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable , TouchableOpacity } from "react-native";
import { Image } from "react-native";
import {
  Color,
  FontSize,
  Padding,
  StyleVariable,
  FontFamily,
  ColorDark
} from "../components/Globalstyle";
import Buttonfap from '../components/buttonfap'
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';


const Mainmenuu = () => {

  const navigation = useNavigation();

  const exitApp = () => {
    BackHandler.exitApp();
  }

  const EdukasiScreen = () =>{
    navigation.navigate("Edukasi");
  }

  const CatatanHarian = () =>{
    navigation.navigate("Catatan");
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View style={styles.homeScreen}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.halloTeman, styles.halloTemanFlexBox]}>
            Hallo, Teman
          </Text>
          <Text style={styles.janganLupaJaga}>Jangan lupa jaga kesehatan</Text>
        </View>
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
        <TouchableOpacity
          style={[
            styles.edukasiKesehatanParent,
            styles.onOfBarMockupSpaceBlock,
          ]}
          onPress={EdukasiScreen}
        >
          <Text style={styles.edukasiKesehatan}>{`Edukasi 
Kesehatan`}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/tdesign_book.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.edukasiKesehatanParent,
            styles.onOfBarMockupSpaceBlock,
          ]}
          onPress={CatatanHarian}
        >
          <Text style={styles.edukasiKesehatan}>{`Catatan
Harian`}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ph_pen.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.edukasiKesehatanParent,
            styles.onOfBarMockupSpaceBlock,
          ]}
          onPress={exitApp}
        >
          <Text style={styles.edukasiKesehatan}>{`Keluar Aplikasi`}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/solar_exit-outline.png")}
          />
        </TouchableOpacity>
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
    paddingHorizontal: Padding.p_5xs,
    borderRadius: StyleVariable.roundLG,
  },
  halloTeman: {
    fontSize: FontSize.heading324Heading32403_size,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.heading324Heading32403,
  },
  janganLupaJaga: {
    fontSize: FontSize.text12Text1201_size,
    lineHeight: 14,
    marginTop: 8,
    fontFamily: FontFamily.text14Text1401,
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
    fontSize: FontSize.text18Text1804_size,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.text18Text1804,
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
    paddingVertical: Padding.p_xs,
    marginLeft: 8,
    justifyContent: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  edukasiKesehatan: {
    fontSize: FontSize.text14Text1402_size,
    lineHeight: 22,
    color: Color.naturalLightMode,
    alignSelf: "stretch",
    fontFamily: FontFamily.text14Text1401,
    textAlign: "left",
  },
  edukasiKesehatanParent: {
    backgroundColor: ColorDark.naturalNightMode,
    width: 156,
    height: 150,
    paddingVertical: Padding.p_base,
    alignItems: "flex-end",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  frameContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap:20,
  },
  homeScreen: {
    backgroundColor: Color.naturalLightMode,
    width: "100%",
    height: 800,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 48,
    overflow: "hidden",
    flex: 1,
  },
});

export default Mainmenuu;
