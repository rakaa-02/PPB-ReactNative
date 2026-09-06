import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const dataNilai = [
  { title: 'Mata Pelajaran Kejuruan', data: ['Pemrograman Web: 90', 'RPL: 88', 'Basis Data: 92'] },
  { title: 'Mata Pelajaran Umum', data: ['Matematika: 85', 'Bahasa Indonesia: 80', 'English: 87'] }
];

export default function DashboardNilai() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={dataNilai}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}><Text>{item}</Text></View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 250, borderWidth: 1, borderColor: '#eee', borderRadius: 8 },
  header: { fontSize: 14, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 8 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#f0f0f0' }
});