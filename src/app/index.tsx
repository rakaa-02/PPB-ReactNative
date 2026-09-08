import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function DashboardUtama() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Tugas React Native</Text>
      <Text style={styles.subHeader}>Berikut daftar tugas</Text>

    <Link href="/soal-loop" asChild>
      <Pressable style={styles.cardMenu}>
        <Text style={styles.menuTitle}>1. Soal Loop</Text>
        {/* <Text style={styles.menuDesc}>Latihan perulangan </Text> */}
      </Pressable>
    </Link>
    
    <Link href="/soal-array" asChild>
      <Pressable style={styles.cardMenu}>
        <Text style={styles.menuTitle}>2. Soal Array</Text>
        <Text style={styles.menuDesc}>Latihan manipulasi data list & array method</Text>
      </Pressable>
    </Link>

    <Link href="/soal-kondisi" asChild>
      <Pressable style={styles.cardMenu}>
        <Text style={styles.menuTitle}>3. Soal Kondisi</Text>
        {/* <Text style={styles.menuDesc}>Latihan percabangan</Text> */}
      </Pressable>
    </Link>

    <Link href="/soal-fungsi" asChild>
      <Pressable style={styles.cardMenu}>
        <Text style={styles.menuTitle}>4. Soal Fungsi</Text>
        <Text style={styles.menuDesc}>Latihan pembuatan dan pemanggilan function</Text>
      </Pressable>
    </Link>

    <Link href="/soal-var" asChild>
      <Pressable style={styles.cardMenu}>
        <Text style={styles.menuTitle}>5. Soal Variabel</Text>
        <Text style={styles.menuDesc}>Latihan pemahaman var, let, dan const</Text>
      </Pressable>
    </Link>
  
    <Link href="/soal-component" asChild>
      <Pressable style={StyleSheet.flatten([styles.cardMenu, styles.cardHighlight])}>
        <Text style={styles.menuTitle}>6. Soal Component</Text>
        <Text style={styles.menuDesc}>UserCard, LoginForm, Dark Mode Slate, Galeri, dll.</Text>
      </Pressable>
    </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f5f9',
    textAlign: 'center',
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  kategoriTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 15,
    marginBottom: 10,
  },
  cardMenu: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHighlight: {
    borderColor: '#3b82f6',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f5f9',
  },
  menuDesc: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});