import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import HousingInfo from '../../components/HousingInfo/HousingInfo';
import Banner from '../../components/Banner/Banner';

function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <HousingInfo
          price="$1,200/month"
          location="Austin, TX"
          beds={2}
          baths={1}
          area={75}
          isPetFriendly={true}
        />
      </View>
      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#CBD5E0',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
});

export default Main;
