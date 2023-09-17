import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color,} from "../components/Globalstyle";
import { useNavigation } from '@react-navigation/native';

const Onboarding3 = () => {

    const navigation = useNavigation();

    const handelSkip = () => {
    navigation.navigate("MainMenu");
  }

    const nextcontent = () =>{
    navigation.navigate("MainMenu");
  }


  return (
    <View style={styles.onboarding3}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.catatanKemajuanParent}>
          <Text style={styles.catatanKemajuan}>Catatan Kemajuan</Text>
          <Text style={[styles.penggunaDapatMencatat, styles.lewatiTypo]}>
            Pengguna dapat mencatat aktivitas harian untuk melihat kemajuan
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handelSkip}>
      <Text style={[styles.lewati, styles.lewatiTypo]}>Lewati</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nextcontent}>
        <View style={[styles.mulaiSekarangWrapper, styles.frameParentPosition]}>
            <Text style={[styles.mulaiSekarang, styles.lewatiTypo]}>
            Mulai Sekarang
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
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
  catatanKemajuan: {
    fontSize: FontSize.heading228Heading22804_size,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "left",
    color: Color.primaryBaseColor,
  },
  penggunaDapatMencatat: {
    marginTop: 12,
    width: 328,
    color: Color.primaryBaseColor,
  },
  catatanKemajuanParent: {
    alignItems: "center",
  },
  frameItem: {
    marginLeft: 10,
  },
  ellipseParent: {
    marginTop: 36,
    flexDirection: "row",
  },
  frameParent: {
    top: 354,
    alignItems: "center",
  },
  lewati: {
    top: 48,
    left: 299,
    color: Color.secondaryInfo,
    position: "absolute",
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.text14Text1402_size,
  },
  mulaiSekarang: {
    color: Color.naturalLightMode,
  },
  mulaiSekarangWrapper: {
    top: 680,
    borderRadius: 20,
    backgroundColor: Color.primaryBaseColor,
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: "center",
    flexDirection: "row",
    width: 328,
    alignItems: "center",
  },
  onboarding3: {
    backgroundColor: Color.naturalLightMode,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Onboarding3;
