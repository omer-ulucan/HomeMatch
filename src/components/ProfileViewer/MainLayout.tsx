import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Banner from './Banner';
import {  Text, Image, TouchableOpacity, StyleSheet } from "react-native";


const profileData = {
  imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/46f7ab8de942b1cd6036fda61c5bc76395e1777b43205ced80c33a799a7329ec?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
  name: "John Doe",
  age: 28,
  profession: "Software Engineer",
  attributes: [
    { imageUri: "...", text: "Turkish" },
    { imageUri: "...", text: "Has a pet (Cat)" },
    { imageUri: "...", text: "Income: $5,000-$7,000/month" },
    { imageUri: "...", text: "Prefer a quiet place, non-smoker" },
  ],
};

const MainLayout: React.FC = () => {
  return (
    <View style={{ marginHorizontal: "auto", backgroundColor: "white", borderRadius: 8, borderWidth: 2, borderColor: "gray" }}>
      <Header />
      <ProfileCard profile={profileData} />
      <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, styles.rejectButton]}>
                <Text style={styles.buttonText}>❌</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.favoriteButton]}>
                <Text style={styles.buttonText}>⭐</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.acceptButton]}>
                <Text style={styles.buttonText}>✅</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
  },
  priceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  locationText: {
    color: "white",
    fontSize: 14,
  },
  detailsContainer: {
    padding: 16,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  petFriendly: {
    color: "green",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
  },
  rejectButton: {
    backgroundColor: "#F56565",
  },
  favoriteButton: {
    backgroundColor: "#ECC94B",
  },
  acceptButton: {
    backgroundColor: "#48BB78",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});

export default MainLayout;
