import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  placeholder,
  type = 'text',
  helperText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={type === 'password'}
        accessibilityLabel={label}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  labelContainer: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 14, color: '#4A5568' },
  required: { fontSize: 14, color: '#E53E3E', marginLeft: 4 },
  input: {
    marginTop: 8,
    padding: 12,
    fontSize: 16,
    color: '#4A5568',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
  },
  helperText: { marginTop: 4, fontSize: 12, color: '#A0AEC0' },
});
