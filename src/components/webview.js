import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, Vibration } from 'react-native';
import blockedData from '../blocked-sites.json';
import {
  Color,
  FontSize,
  Padding,
  StyleVariable,
  FontFamily,
  ColorDark
} from "../components/Globalstyle";

export default function App() {
  const [url, setUrl] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockedType, setBlockedType] = useState('');

  const handleOpenUrl = () => {
    const currentUrl = url.toLowerCase();
    const { isBlocked, type } = isBlockedSite(currentUrl);

    if (isBlocked) {
      if (type === 'blocked') {
        setBlockedType('Situs Terlarang');
      } else if (type === 'adult') {
        setBlockedType('Konten Dewasa 21+');
      }
      Alert.alert(blockedType, 'Jangan dibuka: ' + currentUrl);
      Vibration.vibrate([1000, 1000, 1000]);
    } else {
      Alert.alert('Situs Aman', 'Buka situs ini: ' + currentUrl);
    }
    setIsBlocked(isBlocked);
  };

  const isBlockedSite = (url) => {
    const { blockedSites, adultSites } = blockedData;

    if (blockedSites.some(blockedUrl => url.includes(blockedUrl))) {
      return { isBlocked: true, type: 'blocked' };
    }
    if (adultSites.some(adultUrl => url.includes(adultUrl))) {
      return { isBlocked: true, type: 'adult' };
    }

    return { isBlocked: false, type: '' };
  };

  const handleUrlChange = (text) => {
    setUrl(text);
    setIsBlocked(false);
    setBlockedType('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleUrlChange}
          value={url}
          placeholder="https://example.com"
        />
        {isBlocked ? (
          <Text style={styles.blockedText}>{blockedType}</Text>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleOpenUrl}>
            <Text style={styles.buttonText}>Deteksi Situs</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: Color.primaryBaseColor,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  blockedText: {
    color: 'red',
    fontSize: 14,
  },
});
