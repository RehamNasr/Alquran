/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    StatusBar,
    Image,
    ScrollView
} from 'react-native';
const { height, width } = Dimensions.get("window")
import * as Const_Component from '../Constant/Const_Component';
import * as AllAzkar from '../Constant/AllAzkar';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Sound from 'react-native-sound';
function ItemAzkar({ navigation, route }) {
    let index_ele = route.params.index;
    const [list, setlist] = useState(AllAzkar.azkar[index_ele]);
    const [Backuplist, setBackuplist] = useState(AllAzkar.azkar[index_ele]);
    const move = (index) => {
        switch (index) {
            case 0:
                navigation.navigate("List_suar")

                break;
            case 1:
                navigation.navigate("List_suar")

                break;
            case 2:
                navigation.navigate("Azkar")

                break;
            case 3:
                navigation.navigate("List_suar")

                break;
            case 4:
                navigation.navigate("List_suar")

                break;
            case 5:
                navigation.navigate("List_suar")

                break;
            default:
                navigation.navigate("List_suar")


        }

    }
    const [music, setMusic] = useState(null)


    const play = (link) => {
        let summer = new Sound(`s${link}.mp3`, Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                // console.log('hata', err)
                return;
            }
            summer.play((success) => {
                console.log('end', success)
            })
        }
        )
        // setDuration(summer.getDuration())
        setMusic(summer)


    }

    const min = (index) => {
        let arr = { ...Backuplist }
        if (arr.array[index].count != 0)
            arr.array[index].count--;
        setBackuplist(arr)
    }

    return (
        <>
            <StatusBar backgroundColor={Const_Component.Back_color}></StatusBar>
            <View style={styles.containeer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                    >
                        <SimpleLineIcons name="home" style={styles.icon}></SimpleLineIcons>
                    </TouchableOpacity>

                    <View style={{ ...styles.touch, flex: 2 }}>
                        <Text style={styles.TextHeader}>{list.category}</Text>
                    </View>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <SimpleLineIcons name="arrow-right-circle" style={styles.icon}></SimpleLineIcons>
                    </TouchableOpacity>


                </View>


                <ScrollView>
                    <View style={styles.containeer2}>
                        {
                            Backuplist.array.map((item, index) =>
                                <>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {

                                        }}
                                    >

                                        <Text style={styles.texttitle}>{item.text}</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity
                                            style={styles.button2}
                                            onPress={() => {
                                                play(item.filename)

                                            }}
                                        >

                                            <AntDesign name="sound" style={styles.soundicon}></AntDesign>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.button2}
                                            onPress={() => {
                                                // item.count--;
                                                min(index)

                                            }}
                                        >

                                            <Text style={styles.texttitle}>{item.count}</Text>
                                        </TouchableOpacity>

                                    </View>

                                </>
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    containeer: {
        height: height,
        width: width,
        backgroundColor: Const_Component.Back_color,
        alignItems: "center",
    }, header: {
        height: height * .15,
        width: width,
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    touch: {
        flex: .5,
        alignItems: "center",
        justifyContent: "center"
    }, icon: {
        color: Const_Component.header_text,
        fontSize: 18
    },
    TextHeader: {
        fontSize: 15,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
    }, containeer2: {
        width: width,
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: height * .07
    },
    button: {
        // height: height * .22,
        width: width * .9,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // elevation: 1,
        borderWidth: .2,
        shadowColor: Const_Component.header_text,
        marginVertical: 5,
        borderRadius: 5,
        padding: height * .02,
    },
    button2: {
        height: height * .05,
        width: width * .1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        borderWidth: .02,
        shadowColor: Const_Component.header_text,
        marginVertical: 5,
        borderRadius: 20,
        marginHorizontal: width * .02
    },
    image: {
        height: height * .1,
        width: width * .3,
        marginVertical: height * .01
    },
    texttitle: {
        fontSize: 13,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular",
        textAlign: "center"
    },
    soundicon: {
        fontSize: 12,
        color: Const_Component.header_text
    }
});

export default ItemAzkar;
