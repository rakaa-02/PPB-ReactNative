import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PengaturanModeProps {
  selected: string;
  onSelectMode: (mode: string) => void;
}

export default function PengaturanMode({ selected, onSelectMode }: PengaturanModeProps) {
  const options = ['Light Mode', 'Dark Mode', 'System Default'];

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Pilih Mode Tampilan:</Text>
      
      {options.map((option) => {
        const isActive = selected === option;
        
        return (
          <TouchableOpacity
            key={option}
            activeOpacity={0.7}
            style={[
              styles.option,
              isActive ? styles.activeOption : styles.inactiveOption
            ]}
            onPress={() => onSelectMode(option)}
          >
            <Text style={[styles.optionText, { color: isActive ? '#ffffff' : '#333333' }]}>
              {option}
            </Text>
            {isActive && <Text style={styles.checkMark}>✓ Terpilih</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  subTitle: { fontSize: 13, color: '#666', marginBottom: 10 },
  option: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, borderRadius: 8, marginBottom: 8, borderWidth: 1 },
  activeOption: { backgroundColor: '#007AFF', borderColor: '#007AFF' },
  inactiveOption: { backgroundColor: '#f8f9fa', borderColor: '#e9ecef' },
  optionText: { fontWeight: '600', fontSize: 14 },
  checkMark: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 }
});