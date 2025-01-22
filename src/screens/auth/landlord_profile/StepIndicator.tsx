import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StepIndicatorProps } from './types';

export const StepIndicator: React.FC<StepIndicatorProps> = ({ number, label, active }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, active ? styles.circleActive : styles.circleInactive]}>
        <Text style={[styles.number, active ? styles.numberActive : styles.numberInactive]}>
          {number}
        </Text>
      </View>
      <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleActive: { backgroundColor: '#48BB78' },
  circleInactive: { backgroundColor: '#E2E8F0' },
  number: { fontSize: 14 },
  numberActive: { color: '#FFFFFF' },
  numberInactive: { color: '#718096' },
  label: { marginTop: 4, fontSize: 12 },
  labelActive: { color: '#48BB78' },
  labelInactive: { color: '#718096' },
});
