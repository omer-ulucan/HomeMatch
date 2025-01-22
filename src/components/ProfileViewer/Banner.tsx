import React from 'react';
import { Image } from 'react-native';

const Banner: React.FC = () => {
  return (
    <Image
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/20f5c081b2cb0342b4771a348e8e7a5f0f225d51592db84e6a68e9027b578116?placeholderIfAbsent=true&apiKey=f87fec4726a6425182524207b65fc0d9",
      }}
      style={{
        resizeMode: "contain",
        marginHorizontal: 16,
        marginTop: 20,
        width: 358,
        aspectRatio: 4.17,
      }}
    />
  );
};

export default Banner;
