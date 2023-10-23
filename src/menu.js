import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [amount, setAmount] = useState('');
  const [pulsaProducts] = useState([
    { id: 1, name: 'Pulsa 10K', price: 10000 },
    { id: 2, name: 'Pulsa 25K', price: 25000 },
    { id: 3, name: 'Pulsa 50K', price: 50000 },
    { id: 4, name: 'Pulsa 100K', price: 100000 },
  ]);

  const handlePurchase = () => {
    if (!selectedProduct || !amount) {
      alert('Pilih produk dan masukkan jumlah pulsa terlebih dahulu');
      return;
    }

    // Di sini Anda dapat menambahkan logika untuk memproses pembelian pulsa
    // Misalnya, kirim permintaan ke server atau penyedia layanan pembayaran.

    alert(`Anda membeli ${selectedProduct.name} sejumlah ${amount} pulsa.`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pilih Produk Pulsa:</Text>
      <FlatList
        data={pulsaProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => setSelectedProduct(item)}
            color={selectedProduct && selectedProduct.id === item.id ? 'green' : 'blue'}
          />
        )}
      />

      {selectedProduct && (
        <View>
          <Text>Harga: {selectedProduct.price} IDR</Text>
          <Text>Jumlah Pulsa:</Text>
          <TextInput
            placeholder="Masukkan jumlah pulsa"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <Button title="Beli Pulsa" onPress={handlePurchase} />
        </View>
      )}
    </View>
  );
};

export default App;
