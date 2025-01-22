import React from 'react';
import { View } from 'react-native';
import ImageSection from './ImageSection';
import Attribute from './Attribute';

type ProfileCardProps = {
  profile: {
    imageUrl: string;
    name: string;
    age: number;
    profession: string;
    attributes: { imageUri: string; text: string; imageClass?: object }[];
  };
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <View style={{ marginBottom: 16, backgroundColor: "white", borderRadius: 16, shadowColor: "rgba(0,0,0,0.1)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 6 }}>
      <ImageSection
        imageUrl={profile.imageUrl}
        name={profile.name}
        age={profile.age}
        profession={profile.profession}
      />
      <View style={{ padding: 16 }}>
        {profile.attributes.map((attribute, index) => (
          <Attribute
            key={index}
            imageUri={attribute.imageUri}
            text={attribute.text}
            imageClass={attribute.imageClass}
          />
        ))}
      </View>
    </View>
  );
};

export default ProfileCard;
