import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({ label, required = false, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  labelContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  label: { fontSize: 14, color: '#4A5568' },
  required: { fontSize: 14, color: '#E53E3E', marginLeft: 4 },
});
