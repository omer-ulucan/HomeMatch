import React from 'react';
import { View, Image, Text } from 'react-native';

type AttributeProps = {
  imageUri: string;
  text: string;
  imageClass?: object;
};

const Attribute: React.FC<AttributeProps> = ({ imageUri, text, imageClass }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 4 }}>
      <Image
        source={{ uri: imageUri }}
        style={[{ resizeMode: "contain", height: 16 }, imageClass]}
      />
      <Text style={{ marginLeft: 8, fontSize: 14 }}>{text}</Text>
    </View>
  );
};

export default Attribute;
