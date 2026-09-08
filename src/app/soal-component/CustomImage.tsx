import React, { useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

interface CustomImageProps {
  sourceUrls: string[];
}

export default function CustomImage({ sourceUrls }: CustomImageProps) {
  return (
    // ScrollView horizontal agar foto bisa di-scroll ke samping jika lebih dari ukuran layar
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rowContainer}>
      {sourceUrls.map((url, index) => (
        <ImageItem key={index} url={url} />
      ))}
    </ScrollView>
  );
}

// Komponen Pembantu untuk mengelola status loading masing-masing gambar
function ImageItem({ url }: { url: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.imageWrapper}>
      {loading && <ActivityIndicator style={styles.loader} color="#007AFF" />}
      <Image 
        source={{ uri: url }} 
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 5,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  loader: {
    position: 'absolute',
  },
});