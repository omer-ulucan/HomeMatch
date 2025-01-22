import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioOptionProps } from './types';

export const RadioOption: React.FC<RadioOptionProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.radioCircle} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
  },
  label: { fontSize: 16, color: '#000' },
});
