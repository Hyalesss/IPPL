import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { Color, FontSize, Padding, ColorDark } from "../components/Globalstyle";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { firebaseApp } from "../components/index";

const CatatanCard = ({ catatan, onPressDelete }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("DetailCatatan", { editingCatatan: catatan });
      }}
    >
      <View>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {catatan?.judul}
        </Text>
        <Text style={styles.cardContent} numberOfLines={2}>
          {catatan?.catatan}
        </Text>
      </View>

      <View style={styles.iconContent}>
        <TouchableOpacity onPress={onPressDelete}>
          <Image
            style={styles.icroundPlusIcon}
            contentFit="cover"
            source={require("../assets/trashcan.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CatatanHarian = () => {
  const [catatan, setCatatan] = useState([]);
  const navigation = useNavigation();
  const database = getDatabase(firebaseApp);

  useEffect(() => {
    const catatankuRef = ref(database, "catatanku");

    onValue(catatankuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const catatanArray = Object.values(data);
        setCatatan(catatanArray);
      }
    });
  }, []);

  const handleDeleteCatatan = (catatanId) => {
    const catatanRef = ref(database, `catatanku/${catatanId}`);
    remove(catatanRef)
      .then(() => {
        Alert.alert("Sukses" , "Berhasil Menghapus Catatan");

        setCatatan((prevCatatan) =>
          prevCatatan.filter((catatan) => catatan.id !== catatanId)
        );
      })
      .catch((error) => {
        console.error("Gagal menghapus catatan:", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.catatanContainer}>
        {catatan.map((item, index) => (
          <CatatanCard
            key={index}
            catatan={item}
            onPressDelete={() => {
              handleDeleteCatatan(item.id);
            }}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.tambahCatatan}
        onPress={() => {
          navigation.navigate("BuatCatatan");
        }}>
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
  container: {
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
    width: "48%",
    marginBottom: 16,
    backgroundColor: Color.primaryBaseColor,
    borderRadius: 8,
    padding: 16,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: FontSize.text18Text1804_size,
    fontWeight: "700",
    color: Color.naturalLightMode,
  },
  cardContent: {
    fontSize: FontSize.text16Text1603_size,
    marginTop: 8,
    color: Color.naturalLightMode,
  },
  icroundPlusIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  iconContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 16,
  },
  tambahCatatan: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: ColorDark.naturalNightMode,
    padding: 8,
  },
  tambahCatatanText: {
    fontSize: FontSize.text16Text1603_size,
    fontWeight: "500",
    color: ColorDark.naturalWhiteText,
  },
  icroundPlusIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  }
});

export default CatatanHarian;