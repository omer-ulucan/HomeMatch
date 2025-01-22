import React from 'react';
import { View, Image, Text } from 'react-native';

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "white",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
      }}
    >
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8d1db9ebc88f02fd7785e7abfd852ad99facfae779180d288cdadfbf4d6af92?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
        }}
        style={{
          resizeMode: "contain",
          width: 18,
          aspectRatio: 0.9,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "600", color: "gray" }}>
        Discover Your Match!
      </Text>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/02d1a466e96c3ac232030f183836490ad0e5ef2b1903453d0fac23bbed9c035e?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
        }}
        style={{
          resizeMode: "contain",
          width: 20,
          aspectRatio: 1,
        }}
      />
    </View>
  );
}

export default Header;
