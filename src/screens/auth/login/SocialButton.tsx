import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SocialButtonProps } from './types';

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: icon }} style={styles.icon} accessibilityLabel={`${label} icon`} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  icon: { width: 20, height: 20, resizeMode: 'contain', marginRight: 8 },
  text: { fontSize: 14, fontWeight: '500', color: '#4A5568' },
});
