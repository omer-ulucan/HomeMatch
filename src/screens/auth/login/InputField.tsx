import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  showIcon,
  iconSource,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={type === 'password'}
          style={styles.input}
          accessibilityLabel={label}
        />
        {showIcon && iconSource && (
          <Image
            source={{ uri: iconSource }}
            style={styles.icon}
            accessibilityLabel="Toggle password visibility"
          />
        )}
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
  input: { flex: 1, fontSize: 16, color: '#4A5568' },
  icon: { width: 24, height: 24, marginLeft: 8, resizeMode: 'contain' },
});
