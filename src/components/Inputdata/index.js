import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

const Inputdata = ({ placeholdercatatan, istextarea , onChangeText , namaState , value}) => {
  if (istextarea) {
    return (
      <>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholdercatatan}
          value={value}
          onChangeText={(text) => onChangeText(namaState , text)}
          style={styles.textcatatan}></TextInput>
      </>
    );
  }

  return (
    <>
      <TextInput
        placeholder={placeholdercatatan}
        multiline={true}
        numberOfLines={2}
        value={value}
        onChangeText={(text) => onChangeText(namaState , text)}
        style={styles.label}></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlignVertical: "top",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  textcatatan: {
    textAlignVertical: "top",
    fontSize: 14,
  },
});

export default Inputdata;
