import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.5 : 1 }
        ]}
        onPress={() => alert('Login berhasil!')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', paddingVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12, borderRadius: 6 },
  button: { backgroundColor: '#007AFF', padding: 14, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});