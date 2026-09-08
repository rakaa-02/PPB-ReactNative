import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SoalKondisi() {
  // SOAL 1
  const nilaiUjian = 80;

  // SOAL 2
  const suhuUdara = 40;

  // SOAL 3
  const isLoggedIn = true;
  const namaUser = 'srit';

  // SOAL 4
  const totalBelanja = 350000;

  // SOAL 5
  const jamSekarang = 19;

  // SOAL 6
  const isDarkMode = true;

  // SOAL 7
  const password = 'abc123';

  // SOAL 8
  const jenisKendaraan = 'Mobil';

  // SOAL 9
  const stokBarang = 7;

  // SOAL 10
  const usiaPenonton = 15;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      {/* SOAL 1 */}
      <View style={styles.card}>
        <Text style={styles.title}>Nilai Ujian</Text>
        <Text style={styles.value}>{nilaiUjian}</Text>

        <Text
          style={{
            color: nilaiUjian >= 75 ? 'green' : 'red',
          }}
        >
          {nilaiUjian >= 75
            ? 'Selamat, Anda Lulus!'
            : 'Maaf, Anda Belum Lulus.'}
        </Text>
      </View>

      {/* SOAL 2 */}
      <View style={styles.card}>
        <Text style={styles.title}>Soal Nomer 2</Text>
        <Text style={styles.value}>Suhu Udara</Text>
        <Text style={styles.value}>{suhuUdara}°C</Text>

        {suhuUdara > 35 && (
          <View style={styles.warning}>
            <Text style={styles.warningText}>
              Peringatan: Cuaca Sangat Panas Hari Ini!
            </Text>
          </View>
        )}
      </View>

      {/* SOAL 3 */}
      <View style={styles.card}>
        <Text style={styles.title}>Status Pengguna</Text>

        <Text style={styles.result}>
          {isLoggedIn
            ? `Halo, ${namaUser}!`
            : 'Silakan Login Terlebih Dahulu'}
        </Text>
      </View>

      {/* SOAL 4 */}
      <View style={styles.card}>
        <Text style={styles.title}>Total Belanja</Text>

        <Text style={styles.value}>
          Rp {totalBelanja.toLocaleString('id-ID')}
        </Text>

        <Text
          style={[
            styles.result,
            {
              color:
                totalBelanja > 500000
                  ? 'purple'
                  : totalBelanja >= 200000
                  ? 'blue'
                  : 'gray',
            },
          ]}
        >
          {totalBelanja > 500000
            ? 'Anda Mendapat Diskon 20%!'
            : totalBelanja >= 200000
            ? 'Anda Mendapat Diskon 10%!'
            : 'Belanja lebih banyak untuk dapat diskon!'}
        </Text>
      </View>

      {/* SOAL 5 */}
      <View style={styles.card}>
        <Text style={styles.title}>Jam Sekarang</Text>

        <Text style={styles.value}>
          {jamSekarang}.00
        </Text>

        <Text
          style={[
            styles.result,
            {
              color:
                jamSekarang >= 8 && jamSekarang <= 17
                  ? 'green'
                  : 'red',
            },
          ]}
        >
          {jamSekarang >= 8 && jamSekarang <= 17
            ? 'Toko Buka'
            : 'Toko Tutup'}
        </Text>
      </View>

      {/* SOAL 6 */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? '#121212'
              : '#FFFFFF',
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              color: isDarkMode ? 'white' : 'black',
            },
          ]}
        >
          Mode Tampilan
        </Text>

        <Text
          style={[
            styles.result,
            {
              color: isDarkMode ? 'white' : 'black',
            },
          ]}
        >
          {isDarkMode
            ? 'Dark Mode Aktif'
            : 'Light Mode Aktif'}
        </Text>
      </View>

      {/* SOAL 7 */}
      <View style={styles.card}>
        <Text style={styles.title}>Password</Text>

        <Text style={styles.value}>
          {password}
        </Text>

        {password.length < 6 && (
          <Text style={styles.error}>
            Password terlalu pendek (minimal 6 karakter)
          </Text>
        )}
      </View>

      {/* SOAL 8 */}
      <View style={styles.card}>
        <Text style={styles.title}>Jenis Kendaraan</Text>

        <Text style={styles.value}>
          {jenisKendaraan}
        </Text>

        <Text style={styles.result}>
          {jenisKendaraan === 'Mobil'
            ? 'Tarif Parkir: Rp 5.000 / jam'
            : jenisKendaraan === 'Motor'
            ? 'Tarif Parkir: Rp 2.000 / jam'
            : 'Jenis kendaraan tidak tersedia'}
        </Text>
      </View>

      {/* SOAL 9 */}
      <View style={styles.card}>
        <Text style={styles.title}>Stok Barang</Text>

        <Text style={styles.value}>
          {stokBarang}
        </Text>

        <Text
          style={[
            styles.result,
            {
              color:
                stokBarang > 10
                  ? 'green'
                  : stokBarang >= 1
                  ? 'orange'
                  : 'red',
            },
          ]}
        >
          {stokBarang > 10
            ? 'Stok Tersedia'
            : stokBarang >= 1
            ? 'Stok Terbatas! Segera Beli'
            : 'Stok Habis'}
        </Text>
      </View>

      {/* SOAL 10 */}
      <View style={styles.card}>
        <Text style={styles.title}>Usia Penonton</Text>

        <Text style={styles.value}>
          {usiaPenonton} tahun
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {usiaPenonton < 13
              ? 'Kategori: Semua Umur (SU)'
              : usiaPenonton <= 17
              ? 'Kategori: Remaja (R)'
              : 'Kategori: Dewasa (D)'}
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  content: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },

  value: {
    fontSize: 16,
    marginBottom: 10,
  },

  result: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  warning: {
    backgroundColor: '#ffdddd',
    padding: 12,
    borderRadius: 8,
  },

  warningText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },

  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },

  badge: {
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontWeight: 'bold',
  },
});