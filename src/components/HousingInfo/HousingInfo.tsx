import React from 'react';
import { View, Text, Image } from 'react-native';

interface HousingInfoProps {
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  isPetFriendly: boolean;
}

function HousingInfo({ price, location, beds, baths, area, isPetFriendly }: HousingInfoProps) {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ position: "relative", paddingTop: 80, width: "100%", aspectRatio: 0.857 }}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/032f1765b81744be0dcd2210386470b7cf2b128288fb5c19201359d821aab105?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{price}</Text>
          <View style={{ flexDirection: "row", marginTop: 16, alignItems: "center" }}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9771f56035eba127a63a73fd5c5361f1d8dc81fe4064e922ba24fa79498a3a3d?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
              }}
              style={{ width: 12, height: 12, marginRight: 8 }}
            />
            <Text style={{ fontSize: 14, color: "white" }}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{beds} Beds</Text>
          <Text>{baths} Baths</Text>
          <Text>{area} m²</Text>
        </View>
        {isPetFriendly && (
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
            <Text style={{ color: "green" }}>Pet Friendly</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default HousingInfo;
