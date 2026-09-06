import React, { useState } from 'react';
import { View, Button, Modal, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function IndikatorKoneksi() {
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={handleFetch} />

      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={{ marginTop: 10 }}>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalCard: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }
});