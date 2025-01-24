import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface HousingInfoProps {
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  isPetFriendly: boolean;
}

const HousingInfo: React.FC<HousingInfoProps> = ({
  price,
  location,
  beds,
  baths,
  area,
  isPetFriendly,
}) => {
  return (
    <View style={styles.card}>
      {/* Görsel */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/032f1765b81744be0dcd2210386470b7cf2b128288fb5c19201359d821aab105?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
          }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.priceText}>1200${price}/month</Text>
          <Text style={styles.locationText}>{location}Austin/TX</Text>
        </View>
      </View>

      {/* Detaylar */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text>{beds} 2 Beds</Text>
          <Text>{baths} 1 Baths</Text>
          <Text>{area} 1200 m²</Text>
        </View>
        {isPetFriendly && (
          <Text style={styles.petFriendly}>Pet Friendly</Text>
        )}
      </View>

      {/* Alt butonlar */}
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

export default HousingInfo;
