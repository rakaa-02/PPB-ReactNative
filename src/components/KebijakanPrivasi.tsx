import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

export default function KebijakanPrivasi() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={styles.label}>Saya menyetujui Syarat & Ketentuan</Text>
      </View>

      <Button 
        title="Submit Registrasi" 
        onPress={() => alert('Registrasi Berhasil!')} 
        disabled={!agreed} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  label: { marginLeft: 10, fontSize: 14 }
});