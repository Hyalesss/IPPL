import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color } from "../components/Globalstyle";
import { getDatabase, ref, update, push } from "firebase/database";
import { firebaseApp } from "../components/index";
import { Alert } from 'react-native';

const DetailCatatan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { editingCatatan } = route.params;
  const [judul, setJudul] = useState("");
  const [isiCatatan, setIsiCatatan] = useState("");
  const database = getDatabase(firebaseApp);

  useEffect(() => {
    if (editingCatatan) {
      // Jika ada editingCatatan, isi input dengan nilai yang ada
      setJudul(editingCatatan.judul);
      setIsiCatatan(editingCatatan.catatan);
    }
  }, [editingCatatan]);

  const handleSimpan = () => {
    if (editingCatatan && editingCatatan.id) {
      // Ini adalah catatan yang ada, jadi perbarui catatan di Firebase
      const updatedCatatan = {
        judul: judul,
        catatan: isiCatatan,
      };
      const catatanRef = ref(database, `catatanku/${editingCatatan.id}`);
      update(catatanRef, updatedCatatan)
        .then(() => {
          Alert.alert("Sukses", "Catatan berhasil diperbarui", [
            { text: "OK", onPress: () => navigation.goBack() }
          ]);
        })
        .catch((error) => {
          console.error("Gagal memperbarui catatan:", error);
        });
    } else {
      const newCatatanRef = push(ref(database, "catatanku"));
      const newCatatanKey = newCatatanRef.key;
  
      const catatanku = {
        judul: judul,
        catatan: isiCatatan,
      };
  
      update(ref(database, `catatanku/${newCatatanKey}`), catatanku)
        .then(() => {
          Alert.alert("Sukses", "Catatan baru berhasil ditambahkan", [
            { text: "OK", onPress: () => navigation.goBack() }
          ]);
        })
        .catch((error) => {
          console.error("Gagal menambahkan catatan baru:", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={judul}
        onChangeText={(text) => setJudul(text)}
        placeholder="Judul"
        style={styles.input}
      />
      <TextInput
        value={isiCatatan}
        onChangeText={(text) => setIsiCatatan(text)}
        placeholder="Isi Catatan"
        multiline
        textAlignVertical="top"
        style={[styles.input, styles.textArea]}
      />
      <TouchableOpacity style={styles.tombol} onPress={handleSimpan}>
        <Text style={styles.texttombol}>Update Catatan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textArea: {
    height: 200, 
    paddingTop:12
  },
  tombol: {
    backgroundColor: Color.primaryBaseColor,
    padding: 10,
    borderRadius: 8,
  },
  texttombol: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default DetailCatatan;
