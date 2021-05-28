import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { Audio } from "expo-av";

export default class PhonicSoundButton extends React.Component {
  playSound = async (soundChunk) => {
    var soundLink =
      "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/" +
      soundChunk +
      ".mp3";

    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      {
        shouldPlay: true,
      }
    );
    console.log("async is on");
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.searchButton, { backgroundColor: "lightblue" }]}
        onPress={() => {
          this.playSound(this.props.soundChunk);
        }}
      >
        <Text style={styles.chunkText}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderWidth: 1,
    backgroundColor: "wheat",
    textAlign: "center",
    width: 100,
    marginBottom: 30,
    justifyContent: "center",
    borderRadius: 7,
    alignSelf: "center",
    width: 150,
    height: 60,
  },

  chunkText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 17,
  },
});
