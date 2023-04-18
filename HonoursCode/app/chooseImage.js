import { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native-web";
import axios from "axios";

export default function ImageProcessing() {
  <styles />;

  const [image, setImage] = useState(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [topPrediction, setTopPrediction] = useState(null);
  const [splashImages, setSplashImages] = useState(null);
  const unsplashName = "cat";



  async function pickImage() {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  

  async function unsplashAPI() {
  
    const splashData = await fetch("https://api.unsplash.com/search/photos?page=1&query=mountain&client_id=sqWD3jYgfh5zNQORs-t7p6QmYsWBp8J-3xccCwNIBnQ");  
    const fetchedSplashData = await splashData.json();
    const result = fetchedSplashData.results;
    setSplashImages(result);
    setShouldShow(true);

  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.buttonText} onPress={pickImage}>
          {" "}
          Select Image{" "}
        </Text>

        <Image source={{ uri: image }} style={styles.imageStyle} />

        <Text style={styles.buttonTextSmall} onPress={unsplashAPI}>
          {" "}
          Process Image{" "}
        </Text>

        {shouldShow ? (
          <View>
      
                  
                  <Text style={styles.textBody}>We Found (modelResultsHere) in your image, Here are some images of (modelResultsHere) from Unsplash:</Text>

                  <Image source={{ uri: splashImages[0].urls.regular }} style={styles.imageStyle} />
                  <Image source={{ uri: splashImages[1].urls.regular }} style={styles.imageStyle} />
                  <Image source={{ uri: splashImages[2].urls.regular }} style={styles.imageStyle} />
                  <Image source={{ uri: splashImages[3].urls.regular }} style={styles.imageStyle} />
                  <Image source={{ uri: splashImages[4].urls.regular }} style={styles.imageStyle} />
                  <Image source={{ uri: splashImages[5].urls.regular }} style={styles.imageStyle} />


          </View>
           
        ) : null}
      </View>
    </ScrollView>
  );
}
