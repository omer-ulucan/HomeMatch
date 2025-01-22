import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SignUpButton } from "./SignUpButton";

const signUpOptions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c33ce8e5f1d60ff399493257ed03fc4612bdb7bb5286f8f9070ba8f1066ad1d",
    text: "Sign Up as a Tenant",
    bgColor: "#3182CE",
    onPress: () => {},
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97452fc2283efe1201059742265768ce8aefece8f3a58a29fc81d95a25db61ec",
    text: "Sign Up as a Landlord/Agent",
    bgColor: "#48BB78",
    onPress: () => {},
  },
];

export const OnboardingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/49682e5cf8dfe6140a2e63a4aba0510887e44c76fd989e6605c77baf97ee52cf",
          }}
          style={styles.logo}
          accessibilityRole="image"
        />
        <Text style={styles.title}>
          Find the home you are looking for or list your home!
        </Text>
        <Text style={styles.subtitle}>
          Before you sign up, choose who you are.
        </Text>
      </View>
      <View>
        {signUpOptions.map((option, index) => (
          <View key={index} style={index > 0 ? styles.buttonSpacing : {}}>
            <SignUpButton {...option} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#CBD5E0",
    maxWidth: 480,
    alignSelf: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A202C",
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#718096",
    textAlign: "center",
    marginTop: 8,
  },
  buttonSpacing: {
    marginTop: 16,
  },
});
