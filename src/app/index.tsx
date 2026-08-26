import { Text, View, StyleSheet } from "react-native";
// import VarScreen from "./var";
import VarScreen from "./var";

export default function Index() {
  return (
    <View style={styles.container}>
      <VarScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#eee', padding: 10, borderRadius: 6, marginBottom: 10 },
  nama: { fontSize: 16 },
});
