import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi Pulsa</Text>
      <Text style={styles.description}>
        Aplikasi Pulsa adalah aplikasi yang memungkinkan Anda untuk membeli pulsa
        secara mudah dan cepat. Aplikasi ini dikembangkan oleh [Nama Perusahaan].
      </Text>
      <Text style={styles.description}>
        Versi Aplikasi: 1.0.0
      </Text>
      <Text style={styles.description}>
        Hubungi kami di: [Email Kontak]
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutScreen;
