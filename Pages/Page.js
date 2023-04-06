
import React, { createContext, useEffect, useState } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert
} from 'react-native';
import * as Const_Component from '../Constant/Const_Component';
import Sound from 'react-native-sound';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
export const Playcontext = createContext()
function App() {
  const [music, setMusic] = useState(null)
  const [duration, setDuration] = useState(0)
  const [second, setSecond] = useState(0)
  const play = () => {
    let summer = new Sound("ba.mp3", Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('hata', err)
        return;
      }
      summer.play((success) => {
        console.log('end', success)
      })
    }
    )
    console.log('summer', summer.getDuration())
    setDuration(summer.getDuration())

    setMusic(summer)

  }
  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          setSecond(second)
        })
      }, 100)
    }
  }, [music])

  const setVolume = (type) => {
    const volume = music.getVolume()
    if (type == "+") {
      const newVolume = volume + .5
      music.setVolume(newVolume)

    } else {
      const newVolume = volume - .5
      music.setVolume(newVolume)

    }
  }
  return (

    <View style={styles.containeer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          play()
        }}
      >

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          music.play()
        }}
      >
        <AntDesign name="playcircleo" style={styles.icon}></AntDesign>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          music.pause()
        }}
      >
        <AntDesign name="pausecircleo" style={styles.icon}></AntDesign>


      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          music.stop()
        }}
      >
        <Ionicons name="stop" style={styles.icon} />


      </TouchableOpacity>
      {/* <Text>{second}/{duration}</Text> */}

      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVolume("+")
        }}
      >
        <Text>+</Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVolume("-")
        }}
      >
        <Text>-</Text>

      </TouchableOpacity> */}

    </View>

  )
}



const styles = StyleSheet.create({
  containeer: {
    flex: 1,
    backgroundColor: Const_Component.Back_color,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 14,
    color: "#000"
  }
});

export default App;
