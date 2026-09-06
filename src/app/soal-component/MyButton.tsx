import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyButtonProps {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'success' | 'danger';
}

export default function MyButton({ title, onPress, variant }: MyButtonProps) {
  let backgroundColor = '#007AFF';
  if (variant === 'success') backgroundColor = '#28a745';
  if (variant === 'danger') backgroundColor = '#dc3545';

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 12, borderRadius: 6, alignItems: 'center', marginBottom: 8 },
  text: { color: 'white', fontWeight: 'bold' }
});