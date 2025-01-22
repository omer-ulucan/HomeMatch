import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  isTextArea = false,
  suffix,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, isTextArea && styles.textArea]}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          multiline={isTextArea}
          numberOfLines={isTextArea ? 4 : 1}
        />
        {suffix && <Text style={styles.suffix}>{suffix}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '500', color: '#4A5568', marginBottom: 4 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textArea: { height: 80, alignItems: 'flex-start' },
  input: { flex: 1, fontSize: 16, color: '#4A5568' },
  suffix: { marginLeft: 8, fontSize: 14, color: '#A0AEC0' },
});
