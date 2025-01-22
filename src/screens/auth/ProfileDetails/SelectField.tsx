import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SelectFieldProps } from './types';

export const SelectField: React.FC<SelectFieldProps> = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.selectBox}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40eb4d67df4e882727afd4ec7b2e02877008875759d4d9cdea0b9d69ecec7f25',
          }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '500', color: '#4A5568', marginBottom: 4 },
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  placeholder: { fontSize: 16, color: '#4A5568' },
  icon: { width: 24, height: 24, resizeMode: 'contain' },
});
