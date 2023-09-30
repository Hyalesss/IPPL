import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import Inputdata from "../components/Inputdata";
import { Color } from "../components/Globalstyle";


// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyCFVNm55Bfrm8c7oFHtvhd_RvtQShmvkL4",
  authDomain: "rnipplcrud.firebaseapp.com",
  projectId: "rnipplcrud",
  storageBucket: "rnipplcrud.appspot.com",
  messagingSenderId: "91186429119",
  appId: "1:91186429119:web:488da09b0baa20d94b1a0a",
  databaseURL: "https://rnipplcrud-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Dapatkan referensi ke database Firebase Anda
const database = getDatabase(firebaseApp);
const kontakreferensi = ref(database, 'catatanku');

export default class BuatCatatan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: "",
      catatan: ""
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value
    });
  }

  onSubmit = () => {
    const { judul, catatan } = this.state;

    if (judul && catatan) {
      const newCatatanRef = push(kontakreferensi);
      const newCatatanKey = newCatatanRef.key;

      const catatanku = {
        id : newCatatanKey,
        judul: judul,
        catatan: catatan
      };

      set(newCatatanRef, catatanku)
        .then(() => {
          Alert.alert("Sukses", "Data berhasil ditambah");
          this.props.navigation.navigate("CatatanCuy");
        })
        .catch((error) => {
          console.error("Error menambahkan data:", error);
        });
    } else {
      Alert.alert("Error", "Silakan isi semua data");
    }
  }

  render() {
    return (
      <View style={styles.pages}>
        <Inputdata
          placeholdercatatan="Judul"
          onChangeText={this.onChangeText}
          value={this.state.judul}
          namaState="judul"
        />
        <Inputdata
          placeholdercatatan="Catatan Anda"
          istextarea={true}
          onChangeText={this.onChangeText}
          value={this.state.catatan}
          namaState="catatan"
        />

        <TouchableOpacity style={styles.tombol} onPress={this.onSubmit}>
          <Text style={styles.texttombol}>Tambah Catatan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 20
  },
  tombol: {
    backgroundColor: Color.primaryBaseColor,
    padding: 10,
    borderRadius: 8
  },
  texttombol: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  }
});
