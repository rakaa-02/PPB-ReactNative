import { Text, View, StyleSheet } from "react-native";

export default function latVar() {
  // let firstname = "budi";
  // const lastname = "santoso";
  // let isAktif = true;

  // const outputmMassage = (`akun atas nama : ${firstname} dan ${lastname} ${isAktif} `) ;
  // console.log(firstname);
  // console.log(lastname);
  //   console.log(keluaran);

  // soal 2
  // const rawUsername = " admin_smkn10 ";
  // const cleanUsername = rawUsername.trim();
  // const usernameLength = cleanUsername.length;

  // console.log(`Username: ${cleanUsername}`);
  // console.log(`Panjang karakter: ${usernameLength}`);

  // Export supaya bisa dipanggil dari file lain

  return (
    <View>
      <Text>Nilai Ujian: {nilaiUjian}</Text>
      <Text>{pesan}</Text>
    </View>
  );
    

}
