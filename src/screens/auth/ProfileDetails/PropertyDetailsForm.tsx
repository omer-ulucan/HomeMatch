import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";
import { PropertyFormData } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/Navigation.types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MainLayout">;

export const PropertyDetailsForm: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [formData, setFormData] = useState<PropertyFormData>({
    rooms: "",
    bathrooms: "",
    area: "",
    address: "",
    propertyType: "",
    price: "",
    currency: "",
    notes: "",
  });

  const profileData = {
    name: "John Doe",
    age: 28,
    profession: "Software Engineer",
    attributes: [
      { imageUri: "https://example.com/image1.png", text: "Turkish" },
      { imageUri: "https://example.com/image2.png", text: "Has a pet (Cat)" },
      { imageUri: "https://example.com/image3.png", text: "Income: $5,000-$7,000/month" },
      { imageUri: "https://example.com/image4.png", text: "Prefer a quiet place, non-smoker" },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Property Details</Text>
          <Text style={styles.subtitle}>Step 2 of 2</Text>
        </View>

        <View>
          <SelectField label="Number of Rooms" placeholder="Select the number of rooms" />
          <SelectField label="Number of Bathrooms" placeholder="Select the number of bathrooms" />
          <InputField label="Area (m²)" placeholder="Enter the total square meters" suffix="m²" />
          <InputField label="Address" placeholder="Enter the property address" isTextArea />
          <SelectField label="Property Type" placeholder="Select the property type" />
          <InputField label="Price" placeholder="Enter the rental price" />
          <SelectField label="Currency" placeholder="USD" />
          <InputField
            label="Additional Notes"
            placeholder="Add any extra details about the property (optional)"
            isTextArea
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a84f018f2975e0d04a9aebd32c3313d821c965d0d0d486932272e66ade2b126",
              }}
              style={styles.icon}
            />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>

          {/* Finish and Publish */}
          <TouchableOpacity
            style={styles.publishButton}
            onPress={() => navigation.navigate("MainLayout", { profileData })}
          >
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d517b4793398d634332e7eb9347662931e43202cc00c0e7550abd5283e1f7888",
              }}
              style={styles.icon}
            />
            <Text style={styles.publishButtonText}>Finish and Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 16,
    backgroundColor: "#F7FAFC",
  },
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  publishButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#48BB78",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 14,
    color: "#1A202C",
    marginLeft: 8,
  },
  publishButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 8,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});

export default PropertyDetailsForm;
