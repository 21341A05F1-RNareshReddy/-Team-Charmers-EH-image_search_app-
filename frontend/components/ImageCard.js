import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ImageCard({ image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <Text>{image.user}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default ImageCard;
