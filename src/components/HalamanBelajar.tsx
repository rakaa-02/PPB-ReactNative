import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const kategoriList = ['Matematika','Informatika', 'Bahasa'];

export default function HalamanPembelajaran() {
  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {kategoriList.map((item, index) => (
            <View key={index} style={styles.kategoriBox}>
              <Text style={styles.kategoriText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.kontenScroll}>
        <Text style={styles.judulArtikel}>Artikel Pembelajaran</Text>
        <Text style={styles.paragraf}>
          Ini adalah konten pembelajaran vertikal. Kamu bisa membaca materi lengkap di sini sampai bawah...
        </Text>
        <Text style={styles.paragraf}>
          React Native memungkinkan pembuatan antarmuka fleksibel dengan ScrollView horizontal dan vertikal sekaligus.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 350 },
  kategoriBox: { paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#007AFF', borderRadius: 20, marginRight: 8, justifyContent: 'center' },
  kategoriText: { color: 'white', fontWeight: 'bold' },
  kontenScroll: { marginTop: 15, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 8 },
  judulArtikel: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  paragraf: { fontSize: 14, marginBottom: 12, lineHeight: 20 }
});