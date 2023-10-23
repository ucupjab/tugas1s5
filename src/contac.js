import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontak Kami</Text>
      <Text style={styles.description}>
        Jika Anda memiliki pertanyaan atau masalah terkait aplikasi kami,
        Anda dapat menghubungi kami melalui salah satu cara berikut:
      </Text>
      <Text style={styles.contactInfo}>
        Email: [Email Kontak]
      </Text>
      <Text style={styles.contactInfo}>
        Nomor Telepon: [Nomor Telepon Kontak]
      </Text>
      <Text style={styles.contactInfo}>
        Alamat: [Alamat Kantor]
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
  contactInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ContactScreen;
