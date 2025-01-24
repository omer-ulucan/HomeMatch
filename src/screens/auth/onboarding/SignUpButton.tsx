import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

interface SignUpButtonProps {
  text: string;
  bgColor: string;
  icon: string;
  onPress: () => void;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({ text, bgColor, icon, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <View style={styles.content}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
