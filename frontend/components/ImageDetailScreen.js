import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ImageDetailScreen({ route }) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <Text>User: {image.user}</Text>
      <Text>Height: {image.height}</Text>
      <Text>Width: {image.width}</Text>
      <Text>Downloads: {image.downloads}</Text>
      <Text>Views: {image.views}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default ImageDetailScreen;
