import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { InputField } from './InputField';
import { SocialButton } from './SocialButton';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required!');
      return;
    }
    setError('');
    // Giriş işlemi buraya eklenir
    console.log('Login:', { email, password });
  };

  const socialButtons = [
    { icon: 'https://example.com/google-icon.png', label: 'Google' },
    { icon: 'https://example.com/apple-icon.png', label: 'Apple' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2b32ab786a19364cc7261002b99f3652b166db9f3ccdea0cc6bd1fe888165173',
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Log in to Your Account</Text>
      <Text style={styles.subtitle}>Fill in your login information to continue.</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <InputField
        label="Email or Username"
        placeholder="Enter your email or username"
        value={email}
        onChange={setEmail}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={setPassword}
        showIcon
        iconSource="https://cdn.builder.io/api/v1/image/assets/TEMP/cf9c0f35dc6fdb45bd795b5a0adb37188bca329ce46ca1cf94fd3b114cd72d97"
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialContainer}>
        {socialButtons.map((button, index) => (
          <SocialButton key={index} icon={button.icon} label={button.label} onPress={() => {}} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFFFFF' },
  logoContainer: { alignItems: 'center', marginBottom: 16 },
  logo: { width: 40, height: 40, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1A202C' },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#718096', marginBottom: 16 },
  forgotPassword: { fontSize: 14, color: '#3182CE', textAlign: 'right', marginTop: 8 },
  button: { backgroundColor: '#3182CE', padding: 12, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#FFFFFF', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
  orText: { textAlign: 'center', marginTop: 16, fontSize: 14, color: '#718096' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  errorText: { color: '#E53E3E', textAlign: 'center', marginBottom: 8, fontSize: 14 },
});
