import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Photo } from "../schemas/Photo";

export default function Home() {
  const [photo, setPhoto] = useState<Photo>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Photo>(
        "https://jsonplaceholder.typicode.com/photos/2"
      );

      const data = Photo.parse(response.data);

      setPhoto(data);
    } catch {
      setError("Validation Error!");
    }
  };

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!photo) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <Text style={styles.text}>Home</Text>

      <Text style={styles.text}>Album ID: {photo.albumId}</Text>

      <Image source={{ uri: photo.url }} width={100} height={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
