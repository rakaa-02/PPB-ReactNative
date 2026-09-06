import React from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';

const produkData = Array.from({ length: 15 }, (_, i) => ({ 
  id: i.toString(), 
  nama: `Produk Item ${i + 1}` 
}));

export default function KatalogProduk() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produkData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nama} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300, borderWidth: 1, borderColor: '#eee', borderRadius: 8 },
  item: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  itemText: { fontSize: 14 }
});