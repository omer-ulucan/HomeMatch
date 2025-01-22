import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SignUpButtonProps } from "./types";

export const SignUpButton: React.FC<SignUpButtonProps> = ({
  icon,
  text,
  bgColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }]}
      accessibilityRole="button"
      accessibilityLabel={text}
    >
      <Image
        source={{ uri: icon }}
        style={styles.icon}
        accessibilityRole="image"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
