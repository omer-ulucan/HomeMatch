import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/Navigation.types";
import { FormField } from "./FormField";
import { StepIndicator } from "./StepIndicator";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LandlordProfileForm"
>;

export const LandlordProfileForm: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2da4bd810da8a1c6829e4e5450f8897602a1b6f13007f4c9d9961c4d6c4433a3",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Create Your Landlord Profile</Text>
        <Text style={styles.subtitle}>
          Fill out the details about yourself and your property
        </Text>
      </View>

      <View style={styles.steps}>
        <StepIndicator number="1" label="Personal Info" active />
        <View style={styles.stepLine} />
        <StepIndicator number="2" label="Property Details" active={false} />
      </View>

      <View>
        <FormField label="Full Name" required placeholder="Enter your full name" />
        <FormField label="Email Address" required placeholder="Enter your email address" />
        <FormField
          label="Password"
          required
          placeholder="Create a password"
          type="password"
          helperText="Must contain 8+ characters, 1 uppercase, 1 special character"
        />
      </View>

      {/* Add TouchableOpacity for navigation here */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PropertyDetailsForm")} // Navigate to PropertyDetailsForm
      >
        <Text style={styles.buttonText}>Next Step</Text>
      </TouchableOpacity>

      <Text style={styles.signIn}>Already have an account? Sign in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#FFFFFF", borderRadius: 8 },
  header: { alignItems: "center", marginBottom: 24 },
  logo: { width: 36, height: 36, resizeMode: "contain", marginBottom: 8 },
  title: { fontSize: 18, fontWeight: "bold", color: "#1A202C" },
  subtitle: { fontSize: 14, color: "#718096", textAlign: "center", marginTop: 8 },
  steps: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  stepLine: { width: 40, height: 2, backgroundColor: "#48BB78", marginHorizontal: 8 },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#48BB78",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: { color: "#FFFFFF", textAlign: "center", fontSize: 16, fontWeight: "bold" },
  signIn: { marginTop: 16, fontSize: 12, color: "#1A202C", textAlign: "center" },
});
