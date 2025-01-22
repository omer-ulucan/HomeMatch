import React from 'react';
import { View, Image, Text } from 'react-native';

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "white",
        shadowColor: "rgba(0,0,0,0.05)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9795b5aa6b75f9453766abeff279c95de339886f7cb6cfc0573ab0929ab042dd?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
          }}
          style={{ width: 18, aspectRatio: 0.9 }}
        />
        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: "bold" }}>Find Perfect Tenant</Text>
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a8167e5ad9a072ed970d9c114f4675b9b99a8e4cda007af28586fc8441d67b2?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
        }}
        style={{ width: 36, height: 36 }}
      />
    </View>
  );
};

export default Header;
