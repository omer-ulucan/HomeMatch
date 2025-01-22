import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Banner from './Banner';

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
      <Banner />
    </View>
  );
};

export default MainLayout;
