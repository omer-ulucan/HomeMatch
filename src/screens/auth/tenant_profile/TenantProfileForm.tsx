import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/Navigation.types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "TenantProfile">;

export const TenantProfile: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    hasPets: "",
  });

  const handleContinue = () => {
    navigation.navigate("HousingInfo", {
      price: "1200",
      location: "Austin, TX",
      beds: 2,
      baths: 1,
      area: 1200,
      isPetFriendly: formData.hasPets === "Yes",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Tenant Profile</Text>
      <Text style={styles.subtitle}>
        Fill out the following details to find your dream home.
      </Text>

      <Text style={styles.label}>Full Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={formData.fullName}
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
      />

      <Text style={styles.label}>Email Address *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password *</Text>
      <TextInput
        style={styles.input}
        placeholder="Create a password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
      />
      <Text style={styles.helperText}>
        At least 8 characters, 1 uppercase letter
      </Text>

      <Text style={styles.label}>Do you have pets?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          onPress={() => setFormData({ ...formData, hasPets: "Yes" })}
        >
          <Text style={styles.radioOption}>
            {formData.hasPets === "Yes" ? "●" : "○"} Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFormData({ ...formData, hasPets: "No" })}
        >
          <Text style={styles.radioOption}>
            {formData.hasPets === "No" ? "●" : "○"} No
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A202C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1A202C",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  helperText: {
    fontSize: 12,
    color: "#718096",
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 16,
  },
  radioOption: {
    marginRight: 16,
    fontSize: 14,
    color: "#1A202C",
  },
  button: {
    backgroundColor: "#3182CE",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TenantProfile;
