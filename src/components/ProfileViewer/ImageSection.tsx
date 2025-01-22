import React from 'react';
import { View, Image, Text } from 'react-native';

type ImageSectionProps = {
  imageUrl: string;
  name: string;
  age: number;
  profession: string;
};

const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, name, age, profession }) => {
  return (
    <View style={{ position: "relative", paddingTop: 52, width: "100%", aspectRatio: 1.193 }}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
      />
      <View style={{ position: "absolute", bottom: 10, left: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          {name}, {age}
        </Text>
        <Text style={{ fontSize: 14, color: "white", marginTop: 5 }}>{profession}</Text>
      </View>
    </View>
  );
};

export default ImageSection;
