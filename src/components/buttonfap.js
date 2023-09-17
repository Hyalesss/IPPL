import React, { useMemo, useState } from "react";
import { View, StyleSheet, Animated, Pressable, Easing } from "react-native";
import { Color } from "./Globalstyle";

const Property1Frame18 = () => {
  const [isOn, setIsOn] = useState(false);
  const animation = useMemo(() => new Animated.Value(isOn ? 1 : 0), [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);

    Animated.timing(animation, {
      toValue: isOn ? 0 : 1,
      duration: 300, // Durasi animasi dalam milidetik
      useNativeDriver: false,
      easing: Easing.linear, // Easing yang digunakan untuk transisi
    }).start();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleToggle}>
        <Animated.View
          style={[
            styles.ball,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 60], // Ubah dari kiri ke kanan
                  }),
                },
              ],
            },
          ]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 4,
    width: 100,
    height: 48,
    backgroundColor: Color.primary100,
    borderRadius: 16, 
  },
  ball: {
    width: 32,
    height: 32,
    borderRadius: 16, 
    backgroundColor: Color.primary950,
  },
});

export default Property1Frame18;
