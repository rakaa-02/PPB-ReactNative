import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import UserCard from './UserCard';
import LoginForm from './LoginForm';
import KatalogProduk from './KatalogProduk';
import HalamanBelajar from './HalamanBelajar';
import MyButton from './MyButton';
import IndikatorKoneksi from './IndikatorKoneksi';
import CustomImage from './CustomImage';
import DashboardNilai from './DashboardNilai';
import PengaturanMode from './PengaturanMode';
import KebijakanPrivasi from './KebijakanPrivasi';

export default function HalamanSoalComponent() {
  // State global untuk fitur Dark/Light Mode (Soal 9 & 10)
  const [currentMode, setCurrentMode] = useState('Light Mode');
  const isDark = currentMode === 'Dark Mode';

  // Tema Warna Slate
  const themeBg     = isDark ? '#0f172a' : '#f8fafc';
  const themeCard   = isDark ? '#1e293b' : '#ffffff';
  const themeText   = isDark ? '#f1f5f9' : '#0f172a';
  const themeBorder = isDark ? '#334155' : '#e2e8f0';

  return (
    <ScrollView style={[styles.container, { backgroundColor: themeBg }]}>
      <Text style={[styles.headerTitle, { color: themeText }]}>
        Modul 10 Soal Component
      </Text>

      {/* Soal 1 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 1: Profil Pengguna</Text>
        <UserCard 
          name="John Doe" 
          status="React Native Developer" 
          imageUrl="https://reactnative.dev/img/tiny_logo.png" 
        />
      </View>

      {/* Soal 2 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 2: Form Login</Text>
        <LoginForm />
      </View>

      {/* Soal 3 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 3: Katalog Produk</Text>
        <KatalogProduk />
      </View>

      {/* Soal 4 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 4: Halaman Belajar</Text>
        <HalamanBelajar />
      </View>

      {/* Soal 5 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 5: Tombol Kustom</Text>
        <MyButton  title="Klik Saya" variant="primary" onPress={() => alert('Tombol Ditekan!')} />
      </View>

      {/* Soal 6 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 6: Status Indikator Koneksi</Text>
        <IndikatorKoneksi/>
      </View>

      {/* Soal 7 */}
      <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
        <Text style={styles.labelNomor}>Soal 7: Galeri Foto (Menyamping)</Text>
        <CustomImage 
          sourceUrls={[
            'https://reactnative.dev/img/tiny_logo.png',
            'https://reactnative.dev/img/tiny_logo.png',
            'https://reactnative.dev/img/tiny_logo.png',
          ]} 
        />
      </View>

        {/* Soal 8 */}
        <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
          <Text style={styles.labelNomor}>Soal 8: Dashboard Nilai</Text>
          <DashboardNilai />
        </View>

        {/* Soal 9 */}
        <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
          <Text style={styles.labelNomor}>Soal 9: Pengaturan Mode Tema</Text>
          <PengaturanMode 
            selected={currentMode} 
            onSelectMode={(mode) => setCurrentMode(mode)} 
          />
        </View>

        {/* Soal 10 */}
        <View style={[styles.card, { backgroundColor: themeCard, borderColor: themeBorder }]}>
          <Text style={styles.labelNomor}>Soal 10: Kebijakan Privasi</Text>
          <KebijakanPrivasi />
        </View>

        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  labelNomor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 10,
  },
});