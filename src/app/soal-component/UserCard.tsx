  import React from 'react';
  import { View, Text, Image, StyleSheet } from 'react-native';

  interface UserCardProps {
    name: string;
    status: string;
    imageUrl: string;
  }

  export default function UserCard({ name, status, imageUrl }: UserCardProps) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    card: { flexDirection: 'row', padding: 10, backgroundColor: '#eee', borderRadius: 8, marginBottom: 10 },
    image: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
    info: { justifyContent: 'center' },
    name: { fontSize: 16, fontWeight: 'bold' },
    status: { color: '#555' }
  });