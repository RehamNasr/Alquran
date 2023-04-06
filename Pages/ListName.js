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
import * as NameAllah from '../Constant/NameAllah';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Sound from 'react-native-sound';
function ItemDuas({ navigation, route }) {
    const [list, setlist] = useState(NameAllah.Name);
    const [list2, setlist2] = useState(NameAllah.Name);
    useEffect(() => {
        for (var i = 0; i < list2.length; i++) {
            list2[i].show = false
        }
    }, [])

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
    const show = (index) => {
        let arr = [...list2];
        arr[index].show = !arr[index].show
        setlist2(arr)

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
                        <Text style={styles.TextHeader}>اسماء الله الحسني</Text>
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
                            list2.map((item, index) =>
                                <>
                                    <View style={styles.button}>
                                        <TouchableOpacity style={styles.row1}
                                            onPress={() => {
                                                show(index)
                                            }}
                                        >
                                            <TouchableOpacity
                                                style={styles.buttonarrow}
                                                onPress={() => {
                                                    show(index)
                                                }}
                                            >
                                                <AntDesign name={item.show ? "up" : "down"} style={styles.soundicon}></AntDesign>
                                            </TouchableOpacity>
                                            <View style={styles.text}>
                                                <Text style={styles.texttitle}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        {
                                            item.show ?
                                                <View style={styles.row2}>
                                                    <Text style={styles.textdetails}>{item.text}</Text>

                                                </View> :
                                                null
                                        }

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
        fontFamily: "Marhey-Regular"
    }, containeer2: {
        width: width,
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: height * .01
    },
    button: {
        // height: height * .22,
        width: width * .9,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // elevation: 1,
        shadowColor: Const_Component.header_text,
        marginVertical: height * .015
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
    row1: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        // borderWidth: .2,
        elevation: 1,
        borderRadius: 5,
        padding: height * .02,
        marginBottom: -height * .01,
        backgroundColor: "#fff"
    }, text: {
        width: "85%",
        alignItems: "center",
        justifyContent: "center"
    },
    row2: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: .2,
        borderRadius: 5,
        padding: height * .02,
        backgroundColor: "#fff"
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
    },
    buttonarrow: {
        marginHorizontal: width * .02,
        width: "5%",
    }, textdetails: {
        fontSize: 11,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular",
        textAlign: "center"
    }

});

export default ItemDuas;
