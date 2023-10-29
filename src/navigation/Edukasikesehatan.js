import * as React from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
  Padding,
  ColorDark,
} from "../components/Globalstyle";
import { ScrollView , Linking } from "react-native";


const EdukasiScreen = () => {

  const openWebsite = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Tidak dapat membuka URL: ${url}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const data = [
    {
      title: 'Luka pada alat kelamin Pria',
      url: 'https://www.alodokter.com/penyebab-luka-di-penis',
    },
    {
      title: 'Penurunan Sensitivitas Seksual',
      url: 'https://www.halodoc.com/artikel/5-bahaya-onani-yang-dilakukan-secara-berlebih-pada-pria',
    },
    {
      title: 'Pengobatan Masturbasi',
      url: 'https://www.siloamhospitals.com/informasi-siloam/artikel/cara-mengatasi-ejakulasi-dini',
    },
  ];

  return (
    <ScrollView style={styles.edukasiScreen2}>
      <Pressable
        style={styles.iconamoonarrowLeft2LightParent}
        onPress={() => {}}
      >
        <View style={styles.frameWrapper}>
          <View style={styles.macamPenyakitParent}>
            <Text style={[styles.macamPenyakit, styles.detailsTypo]}>
              Macam Penyakit
            </Text>
            <Text
              style={[
                styles.pengetahuanPenyakitMasturbas,
                styles.lukaPadaAlatTypo,
              ]}
            >
              Pengetahuan Penyakit Masturbasi
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.frameParent}>
        {data.map((item, index) => (
          <Pressable
            key={index}
            style={styles.lukaPadaAlatKelaminPriaParent}
          >
            <Text style={[styles.lukaPadaAlat, styles.lukaPadaAlatTypo]}>
              {item.title}
            </Text>
            <TouchableOpacity onPress={() => openWebsite(item.url)}>
              <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
            </TouchableOpacity>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  detailsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.label12Label1203,
    fontWeight: "600",
  },
  lukaPadaAlatTypo: {
    fontFamily: FontFamily.text14Text1401_size,
    textAlign: "left",
  },
  iconamoonarrowLeft2Light: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  macamPenyakit: {
    fontSize: FontSize.heading324Heading32403_size,
    lineHeight: 32,
    color: Color.naturalWhiteText,
  },
  pengetahuanPenyakitMasturbas: {
    lineHeight: 18,
    marginTop: 8,
    fontSize: FontSize.label12Label1203_size,
    color: Color.naturalWhiteText,
  },
  macamPenyakitParent: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  frameWrapper: {
    width: 206,
    height: 54,
    marginLeft: 8,
  },
  iconamoonarrowLeft2LightParent: {
    flexDirection: "row",
  },
  lukaPadaAlat: {
    fontSize: FontSize.text14Text1401_size,
    lineHeight: 22,
    color: Color.naturalLightMode,
    alignSelf: "stretch",
  },
  details: {
    lineHeight: 18,
    color: Color.secondaryInfo,
    fontSize: FontSize.label12Label1203_size,
  },
  lukaPadaAlatKelaminPriaParent: {
    borderRadius: StyleVariable.roundLG,
    backgroundColor: ColorDark.naturalNightMode,
    width: 156,
    height: 150,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "flex-end",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  frameParent: {
    flexWrap: "wrap",
    marginTop: 48,
    justifyContent: "space-between",
    alignItems:"flex-start",
    rowGap:16,
    flexDirection: "row",
  },
  edukasiScreen2: {
    backgroundColor: Color.naturalLightMode,
    flex: 1,
    width: "100%",
    paddingHorizontal: Padding.p_base,
    marginVertical:24,
    overflow: "hidden",
  },
});

export default EdukasiScreen;
