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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
function HomeAzkar({ navigation }) {
    const list = AllAzkar.azkar;
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
                        <Text style={styles.TextHeader}>الاذكار</Text>
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
                            list.map((item, index) =>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        navigation.navigate("ItemAzkar", {
                                            index: index
                                        })
                                        // move(index)

                                    }}
                                >

                                    <Text style={styles.texttitle}>{item.category}</Text>
                                </TouchableOpacity>


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
        fontSize: 20,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
    }, containeer2: {
        width: width * .95,
        // height: height * .8,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: height * .01,
    },
    button: {
        height: height * .12,
        width: width * .47,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowColor: Const_Component.header_text,
        marginVertical: 5,
        borderRadius: 10,
        // borderWidth:.3
    },
    image: {
        height: height * .1,
        width: width * .3,
        marginVertical: height * .01
    },
    texttitle: {
        fontSize: 12,
        color: Const_Component.title_text,
        textAlign: "center",
        fontFamily: "Marhey-Regular",


    }
});

export default HomeAzkar;
