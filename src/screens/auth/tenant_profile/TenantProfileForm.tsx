import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { InputField } from './InputField';
import { FormField } from './FormField';
import { RadioOption } from './RadioOption';

export const TenantProfileForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Tenant Profile</Text>
      <Text style={styles.subtitle}>Fill out the following details to find your dream home.</Text>

      <InputField label="Full Name" required placeholder="Enter your full name" id="fullName" />
      <InputField
        label="Email Address"
        required
        placeholder="Enter your email address"
        type="email"
        id="email"
      />
      <FormField label="Password" required>
        <TextInput
          secureTextEntry
          placeholder="Create a password"
          style={styles.input}
          accessibilityLabel="Password input"
        />
        <Text style={styles.helperText}>At least 8 characters, 1 uppercase letter</Text>
      </FormField>
      <FormField label="Do you have pets?">
        <RadioOption label="Yes" value="yes" name="pets" id="pets-yes" />
        <RadioOption label="No" value="no" name="pets" id="pets-no" />
      </FormField>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#FFFFFF', borderRadius: 8 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#1A202C' },
  subtitle: { fontSize: 14, marginBottom: 16, color: '#718096' },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 8,
  },
  helperText: { fontSize: 12, color: '#A0AEC0', marginTop: 4 },
  button: {
    backgroundColor: '#3182CE',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: { color: '#FFFFFF', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});
