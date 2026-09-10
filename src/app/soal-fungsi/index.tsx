import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function SoalFungsi() {
  // 1. Function Sederhana Tanpa Return
  let pesanTampilkan = "";
  function tampilkan() {
    pesanTampilkan = "Halo, Selamat Belajar Function!";
  }
  tampilkan();

  // 2. Function Sederhana Dengan Return
  function munculkanAngkaDua() {
    return 2;
  }
  const angkaDua = munculkanAngkaDua();

  // 3. Function Dengan Parameter
  function kalikanDua(angka: number) {
    return angka * 2;
  }
  const hasilKalikanDua = kalikanDua(4);

  // 4. Pengiriman Parameter Lebih Dari Satu
  function tambahAngka(angkaPertama: number, angkaKedua: number) {
    return angkaPertama + angkaKedua;
  }
  const hasilPenjumlahan = tambahAngka(5, 3);

  // 5. Arrow Function (ES6)
  const sapaUser = (nama: string) => {
    return `Selamat datang, ${nama}!`;
  };
  const pesanSapaan = sapaUser("Adyaraka");

  // 6. Anonymous Function
  const fungsiPerkalian = function (a: number, b: number) {
    return a * b;
  };
  const hasilPerkalianAnon = fungsiPerkalian(4, 5);

  // 7. Default Parameters (ES6)
  function hitungTotal(a: number, b: number = 1) {
    return a * b;
  }
  const denganDefault = hitungTotal(5); // Menggunakan b = 1
  const tanpaDefault = hitungTotal(5, 3); // b diisi 3

  // 8. Function Dengan Kondisional (If/Else)
  function cekKondisiAngka(a: number, b: number) {
    const total = a + b;
    if (total > 10) {
      return "Hasil lebih besar dari 10";
    } else if (total > 0 && total <= 10) {
      return "Hasil antara 1 sampai 10";
    } else {
      return "Hasil 0 atau negatif";
    }
  }
  const hasilKondisi = cekKondisiAngka(6, 7);

  // 9. Rest Parameters (ES6)
  const gabungNama = (...rest: string[]) => {
    const [firstName, lastName] = rest;
    return `${firstName} ${lastName}`;
  };
  const namaLengkap = gabungNama("Adyaraka", "Syahputra");

  // 10. Rest Parameter dengan Filter Array
  const filterTeks = (...rest: any[]) => {
    return rest.filter((el) => typeof el === 'string').join(', ');
  };
  const hasilFilter = filterTeks(10, "React", true, "Native", 2026);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header persis standar Expo Router */}
      <Stack.Screen 
        options={{ 
          title: 'soal-fungsi/index',
          headerShown: true,
        }}
      />

      <Text style={styles.title}>Latihan Function JavaScript</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. Function Tanpa Return</Text>
        <Text style={styles.cardText}>Output: {pesanTampilkan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Function Dengan Return</Text>
        <Text style={styles.cardText}>Return Nilai: {angkaDua}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. Function Dengan Parameter</Text>
        <Text style={styles.cardText}>kalikanDua(4) = {hasilKalikanDua}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>4. Multiple Parameters</Text>
        <Text style={styles.cardText}>tambahAngka(5, 3) = {hasilPenjumlahan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>5. Arrow Function (ES6)</Text>
        <Text style={styles.cardText}>{pesanSapaan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>6. Anonymous Function</Text>
        <Text style={styles.cardText}>fungsiPerkalian(4, 5) = {hasilPerkalianAnon}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>7. Default Parameters</Text>
        <Text style={styles.cardText}>hitungTotal(5) [b default 1] = {denganDefault}</Text>
        <Text style={styles.cardText}>hitungTotal(5, 3) = {tanpaDefault}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>8. Function dengan Conditional</Text>
        <Text style={styles.cardText}>cekKondisiAngka(6, 7): {hasilKondisi}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>9. Rest Parameters (Gabung String)</Text>
        <Text style={styles.cardText}>Hasil Rest Parameter: {namaLengkap}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>10. Rest Parameters (Filtering Array)</Text>
        <Text style={styles.cardText}>Elemen String yang Ditemukan: {hasilFilter}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc' 
  },
  content: { 
    padding: 16 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#0f172a', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  card: { 
    backgroundColor: '#ffffff', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#0284c7', 
    marginBottom: 8 
  },
  cardText: { 
    fontSize: 13, 
    color: '#334155', 
    marginBottom: 4 
  },
});