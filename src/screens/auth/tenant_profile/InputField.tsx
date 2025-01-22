import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FormField } from './FormField';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  placeholder,
  type = 'text',
  id,
}) => {
  return (
    <FormField label={label} required={required}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={type === 'password'}
          style={styles.input}
          accessibilityLabel={label}
        />
      </View>
    </FormField>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: { fontSize: 16, color: '#4A5568' },
});
