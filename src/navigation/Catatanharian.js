import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import {
  Color,
  FontSize,
  StyleVariable,
  Padding,
  ColorDark,
} from "../components/Globalstyle";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../components/index";

const CatatanHarian = () => {
  const [catatan, setCatatan] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const catatankuRef = ref(database, "catatanku");

    onValue(catatankuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const catatanArray = Object.values(data);
        setCatatan(catatanArray);
      }
    });
  }, []);

  return (
    <ScrollView style={styles.catatanHarian}>
      <View style={styles.catatanContainer}>
        {catatan.map((item, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.cardTitle}>{item.judul}</Text>
            <Text style={styles.cardContent}>{item.catatan}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.tambahCatatan}
        onPress={() => {
          navigation.navigate("BuatCatatan");
        }}
      >
        <Text style={styles.tambahCatatanText}>Buat catatan</Text>
        <Image
          style={styles.icroundPlusIcon}
          contentFit="cover"
          source={require("../assets/ic_round-plus.png")}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catatanHarian: {
    flex: 1,
    backgroundColor: Color.naturalLightMode,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
  },
  catatanContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // 2 cards per row with a small gap
    marginBottom: 16,
    backgroundColor: ColorDark.naturalNightMode,
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: FontSize.text18Text1804_size,
    fontWeight: "700",
    color: Color.naturalWhiteText,
  },
  cardContent: {
    fontSize: FontSize.text16Text1603_size,
    marginTop: 8,
    color: Color.naturalWhiteText,
  },
  tambahCatatan: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  tambahCatatanText: {
    fontSize: FontSize.text16Text1603_size,
    fontWeight: "500",
    color: ColorDark.naturalNightMode,
  },
  icroundPlusIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});

export default CatatanHarian;
