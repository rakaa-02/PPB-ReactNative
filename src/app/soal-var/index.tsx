import { Stack } from 'expo-router';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function SoalVariabel() {
  // ==========================================
  // SOAL 1: Registrasi Akun (Variabel & String)
  // ==========================================
  const firstName = "Budi";
  const lastName = "Santoso";
  const isAktif = true;
  const outputSoal1 = `Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`;
  console.log("Soal 1:", outputSoal1);

  // ==========================================
  // SOAL 2: Validasi Nama Pengguna (Trim & Length)
  // ==========================================
  const rawUsername = "  admin_smkn10  ";
  const cleanUsername = rawUsername.trim();
  const usernameLength = cleanUsername.length;
  console.log(`Soal 2: Username: '${cleanUsername}', Panjang: ${usernameLength}`);

  // ==========================================
  // SOAL 3: Sensor Komentar (Substring & IndexOf)
  // ==========================================
  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
  const posisiBuruk = komentar.indexOf("buruk");
  const potonganKalimat = komentar.substring(0, 19);
  console.log(`Soal 3: Indeks 'buruk': ${posisiBuruk}, Substring: '${potonganKalimat}'`);

  // ==========================================
  // SOAL 4: Kode Kupon Diskon (Concat & Uppercase)
  // ==========================================
  const string1 = "diskon";
  const string2 = "spesial50";
  const kodeKupon = string1.concat(string2).toUpperCase();
  console.log("Soal 4: Kode Kupon:", kodeKupon);

  // ==========================================
  // SOAL 5: Konversi Harga Produk (Number & ParseInt)
  // ==========================================
  const hargaStr = "150000.50";
  const hargaNumber = parseFloat(hargaStr);
  const stokStr = "25";
  const stokInteger = parseInt(stokStr, 10);
  const totalNilaiStok = hargaNumber * stokInteger;
  console.log("Soal 5: Total Harga Stok:", totalNilaiStok);

  // ==========================================
  // SOAL 6: Kalkulator Diskon Belanja (Aritmatika & Assignment)
  // ==========================================
  let totalBelanja = 250000;
  totalBelanja -= 50000; // Sisa 200.000
  const pajak = totalBelanja * 0.10; // Pajak 10% = 20.000
  totalBelanja += pajak; // Total 220.000
  console.log("Soal 6: Total Pembayaran Akhir:", totalBelanja);

  // ==========================================
  // SOAL 7: Validasi Usia (Strict vs Standard)
  // ==========================================
  const inputUsia = "17";
  const syaratUsia = 17;
// @ts-ignore
  const isStrictEqual = inputUsia === (syaratUsia as any);
// Konversi string ke number secara eksplisit agar `>=` dibolehkan TypeScript
  const isGreaterOrEqual = Number(inputUsia) >= syaratUsia;
  console.log(`Soal 7: Strict (===): ${isStrictEqual}, Comparison (>=): ${isGreaterOrEqual}`);

  // ==========================================
  // SOAL 8: Verifikasi Keamanan Login Ganda (AND &&)
  // ==========================================
  const isPasswordCorrect = true;
  const isEmailVerified = true;
  const isTombolAktif = isPasswordCorrect && isEmailVerified;
  // Skenario salah satu false:
  const isSkenarioGagal = isPasswordCorrect && false;
  console.log(`Soal 8: Login Berhasil: ${isTombolAktif}, Skenario Gagal: ${isSkenarioGagal}`);

  // ==========================================
  // SOAL 9: Syarat Beasiswa (OR ||)
  // ==========================================
  const isNilaiTinggi = true; // Nilai > 85
  const isJuaraLomba = false; // Tidak juara
  const isDapatBeasiswa = isNilaiTinggi || isJuaraLomba;
  console.log("Soal 9: Status Kelayakan Beasiswa:", isDapatBeasiswa);

  // ==========================================
  // SOAL 10: Block Scope (Let vs Var)
  // ==========================================
  let analisisBlockScope = "";
  const isMember = true;
  if (isMember) {
    let diskonMember = 0.2;
    var diskonVar = 0.2;
  }
  
  try {
    // @ts-ignore
    analisisBlockScope = `Variabel 'var' bisa diakses di luar blok (nilai: ${diskonVar}), sedangkan 'let' hanya hidup di dalam blok (Block Scope).`;
  } catch (error) {
    analisisBlockScope = `Error: ${(error as Error).message}`;
  }

return (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <Stack.Screen 
      options={{ 
        title: 'Soal Variabel',
        headerShown: true,
      }}/>

    <Text style={styles.title}>Latihan Variabel dan Operator</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 1: Registrasi Akun</Text>
        <Text style={styles.cardText}>{outputSoal1}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 2: Validasi Username</Text>
        <Text style={styles.cardText}>Username: "{cleanUsername}"</Text>
        <Text style={styles.cardText}>Panjang Karakter: {usernameLength}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 3: Sensor Komentar</Text>
        <Text style={styles.cardText}>Posisi Indeks 'buruk': {posisiBuruk}</Text>
        <Text style={styles.cardText}>Potongan Substring (0-19): "{potonganKalimat}"</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 4: Kode Kupon Diskon</Text>
        <Text style={styles.cardText}>Kode Kupon: {kodeKupon}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 5: Konversi Harga Produk</Text>
        <Text style={styles.cardText}>Total Nilai Stok (Harga x Stok): Rp {totalNilaiStok.toLocaleString('id-ID')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 6: Kalkulator Diskon Belanja</Text>
        <Text style={styles.cardText}>Total Pembayaran (+Pajak 10%): Rp {totalBelanja.toLocaleString('id-ID')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 7: Validasi Usia</Text>
        <Text style={styles.cardText}>"17" === 17 : {isStrictEqual ? "true" : "false"}</Text>
        <Text style={styles.cardText}>"17" &gt;= 17 : {isGreaterOrEqual ? "true" : "false"}</Text>
        <Text style={styles.analisisText}>
          Analisis: === bernilai false karena mengecek nilai sekaligus tipe data (String vs Number).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 8: Verifikasi Login (AND)</Text>
        <Text style={styles.cardText}>Status Tombol Masuk: {isTombolAktif ? "Aktif (true)" : "Non-aktif (false)"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 9: Syarat Beasiswa (OR)</Text>
        <Text style={styles.cardText}>
          Kelayakan Beasiswa (Nilai Tinggi OR Juara): {isDapatBeasiswa ? "Layak (true)" : "Tidak Layak (false)"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 10: Block Scope (Let vs Var)</Text>
        <Text style={styles.analisisText}>{analisisBlockScope}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc' // Latar belakang abu-abu sangat muda
  },
  content: { 
    padding: 16 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#0f172a', // Judul utama warna gelap
    marginBottom: 20, 
    textAlign: 'center' 
  },
  card: { 
    backgroundColor: '#ffffff', // Kartu warna putih bersih
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#e2e8f0', // Garis tepi tipis abu-abu
    // Efek bayangan halus
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#0284c7', // Warna biru terang khas Soal Component
    marginBottom: 8 
  },
  cardText: { 
    fontSize: 13, 
    color: '#334155', // Warna teks isi gelap/jelas
    marginBottom: 4 
  },
  analisisText: { 
    fontSize: 12, 
    color: '#64748b', // Teks penjelasan abu-abu sedang
    marginTop: 6, 
    lineHeight: 18 
  }
});