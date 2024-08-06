import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import ImageCard from './ImageCard';

function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/search?query=${query}`);
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for images"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchImages} />
      <FlatList
        data={images}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <ImageCard image={item} onPress={() => navigation.navigate('ImageDetail', { image: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
