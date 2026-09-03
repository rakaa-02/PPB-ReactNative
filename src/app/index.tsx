import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomImage from "../components/CustomImage";
import DashboardNilai from "../components/DashboardNilai";
import HalamanPembelajaran from "../components/HalamanBelajar";
import IndikatorKoneksi from "../components/IndikatorKoneksi";
import KatalogProduk from "../components/KatalogProduk";
import KebijakanPrivasi from "../components/KebijakanPrivasi";
import LoginForm from "../components/LoginForm";
import MyButton from "../components/MyButton";
import PengaturanMode from "../components/PengaturanMode";
import UserCard from "../components/UserCard";

export default function LayarUtama() {
  // State untuk mengontrol tema (Light/Dark Mode dari Soal 9)
  const [currentMode, setCurrentMode] = useState("Light Mode");

  // Penentuan warna tema berdasarkan state
  const isDark = currentMode === "Dark Mode";
  const themeContainer = isDark ? "#121212" : "#f0f2f5";
  const themeCard = isDark ? "#1e1e1e" : "#ffffff";
  const themeText = isDark ? "#ffffff" : "#1c1e21";

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeContainer }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.headerUtama, { color: themeText }]}>
        Daftar Tugas & Latihan React Native
      </Text>

      {/* ==================== KELOMPOK: SOAL COMPONENT ==================== */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>SOAL COMPONENT 1-10</Text>
      </View>

      {/* Soal 1 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 1: Pembuatan Profil Anggota Komunitas
        </Text>
        <UserCard
          name="Andi Saputra"
          status="Aktif"
          imageUrl="https://www.bing.com/images/search?view=detailV2&ccid=%2fs7abLFN&id=2AF3AE336AE962DA99F2E05879A82CE0886F5A73&thid=OIP._s7abLFNiuCf7U0k207W5gHaIj&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2022%2f08%2f20%2f12%2f42%2fwoman-7399058_1280.jpg&exph=1280&expw=1108&q=foto+cewek+cantik&FORM=IRPRST&ck=FA8E5B7269440A82DB82DB1757434159&selectedIndex=43&itb=0"
        />
        <UserCard
          name="Budi Santoso"
          status="Alumni"
          imageUrl="https://www.bing.com/images/search?view=detailV2&ccid=ceeDzHz%2f&id=96DF493E8634FA4C16E93D4F8E2689345D7AB60E&thid=OIP.ceeDzHz_Q5YTniptd2IT6gHaJn&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f66%2f89%2fb9%2f6689b9a9e2986890bcb56595dc339079.jpg&exph=1024&expw=788&q=foto+cewek+cantik&mode=overlay&FORM=IQFRBA&ck=738A84B17DD8B837C333AC1BE77C7CBC&selectedIndex=0&idpp=serp"
        />
      </View>

      {/* Soal 2 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>Soal 2: Form Login Interaktif</Text>
        <LoginForm />
      </View>

      {/* Soal 3 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 3: Katalog Produk Toko Online (FlatList)
        </Text>
        <KatalogProduk />
      </View>

      {/* Soal 4 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 4: Halaman Pembelajaran Interaktif
        </Text>
        <HalamanPembelajaran />
      </View>

      {/* Soal 5 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 5: Komponen Tombol Kustom Berdasarkan Varian
        </Text>
        <MyButton
          title="Tombol Primary"
          variant="primary"
          onPress={() => alert("Primary ditekan")}
        />
        <MyButton
          title="Tombol Success"
          variant="success"
          onPress={() => alert("Success ditekan")}
        />
        <MyButton
          title="Tombol Danger"
          variant="danger"
          onPress={() => alert("Danger ditekan")}
        />
      </View>

      {/* Soal 6 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>Soal 6: Status Indikator Koneksi</Text>
        <IndikatorKoneksi />
      </View>

      {/* Soal 7 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard}]}>
        <Text style={styles.nomorTugas}>Soal 7: Layout Galeri Foto (Menyamping)</Text>
        
        <CustomImage 
          sourceUrls={[
            'https://th.bing.com/th/id/OIP.Xn03a6oUUOPVfZjrRHUmjAAAAA?w=144&h=108&c=7&qlt=90&bgcl=ffc5d3&r=0&o=6&dpr=1.5&pid=13.1',
            'https://reactnative.dev/img/tiny_logo.png',
            'https://reactnative.dev/img/tiny_logo.png',
            'https://reactnative.dev/img/tiny_logo.png',
          ]} 
        />
      </View>

      {/* Soal 8 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 8: Dashboard Nilai Siswa (SectionList)
        </Text>
        <DashboardNilai />
      </View>

      {/* Soal 9 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 9: Pilihan Kategori Kustom (Umpan Balik Visual)
        </Text>
        <PengaturanMode selected={currentMode} onSelectMode={setCurrentMode} />
      </View>

      {/* Soal 10 */}
      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>
          Soal 10: Pengaturan Kebijakan Privasi (Switch)
        </Text>
        <KebijakanPrivasi />
      </View>

      {/* ==================== KELOMPOK: TUGAS LAINNYA ==================== */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          PART 2: TUGAS LAINNYA / LATIHAN DASAR
        </Text>
      </View>

      <View style={[styles.cardTugas, { backgroundColor: themeCard }]}>
        <Text style={styles.nomorTugas}>Latihan Dasar JS</Text>
        <Text style={{ color: isDark ? "#ccc" : "#666" }}>
          File latihan seperti array.jsx, fungsi.jsx, loop.jsx, dan kondisi.jsx
          tersimpan di folder app.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 50,
    paddingBottom: 40,
  },
  headerUtama: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  cardTugas: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nomorTugas: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 6,
  },
});
