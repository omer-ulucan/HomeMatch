import React from 'react';
import { Image } from 'react-native';

function Banner() {
  return (
    <Image
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8ecc9cfee57c872ef299d740e9c56ae961f15c97a35ff6014a321c3b21f9166?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
      }}
      style={{
        resizeMode: "contain",
        marginTop: 40,
        width: "100%",
        aspectRatio: 4.42,
      }}
    />
  );
}

export default Banner;
