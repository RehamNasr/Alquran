

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
function Home({ navigation }) {
    // const [list, setList] = useState([
    //     {
    //         name: "السبحه الالكترونيه",
    //         icon: require("../Constant/Images/beads.png")
    //     }, {
    //         name: "القرأن الكريم",
    //         icon: require("../Constant/Images/mushaf.png")
    //     }, {
    //         name: "الاذكار",
    //         icon: require("../Constant/Images/mushaf.png")
    //     }, {
    //         name: "الادعيه",
    //         icon: require("../Constant/Images/muslim-man-is-praying.png")
    //     }, {
    //         name: "اسماء الله الحسني",
    //         icon: require("../Constant/Images/allah.png")
    //     }, {
    //         name: "أحاديث",
    //         icon: require("../Constant/Images/mushaf.png")
    //     }, {
    //         name: "حصن المسلم",
    //         icon: require("../Constant/Images/islamic-mosque.png")
    //     }, {
    //         name: "الرقية الشرعيه",
    //         icon: require("../Constant/Images/mushaf.png")
    //     },
    // ])
    const [list, setList] = useState([
        {
            name: "القرأن الكريم",
            icon: require("../Constant/Images/mushaf.png")
        }, {
            name: "الاذكار",
            icon: require("../Constant/Images/beads.png")
        }, {
            name: "الادعيه",
            icon: require("../Constant/Images/muslim-man-is-praying.png")
        }, {
            name: "اسماء الله الحسني",
            icon: require("../Constant/Images/allah.png")
        },
    ])
    // const move = (index) => {
    //     switch (index) {
    //         case 0:
    //             navigation.navigate("List_suar")

    //             break;
    //         case 1:
    //             navigation.navigate("List_suar")

    //             break;
    //         case 2:
    //             navigation.navigate("HomeAzkar")

    //             break;
    //         case 3:
    //             navigation.navigate("HomeDuas")

    //             break;
    //         case 4:
    //             navigation.navigate("ListName")

    //             break;
    //         case 5:
    //             navigation.navigate("List_suar")

    //             break;
    //         default:
    //             navigation.navigate("List_suar")


    //     }

    // }
    const move = (index) => {
        switch (index) {
            case 0:
                navigation.navigate("List_suar")

                break;
            case 1:
                navigation.navigate("HomeAzkar")

                break;
            case 2:
                navigation.navigate("HomeDuas")

                break;
            default:
                navigation.navigate("ListName")
        }

    }
    return (
        <>
            <StatusBar backgroundColor={Const_Component.Back_color}></StatusBar>
            <View style={styles.containeer}>
                <View style={styles.header}>
                    <Text style={styles.TextHeader}>تسبيحه</Text>


                </View>

                <View style={styles.header}>
                    <Text style={styles.texttitle}>اقتباسات</Text>
                    <Text style={styles.texttitle}>" فنادى في الظلمات أن لا إله إلا أنت سبحانك إني كنت من الظالمين "</Text>
                </View>
                <ScrollView>
                    <View style={styles.containeer2}>
                        {
                            list.map((item, index) =>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        // navigation.navigate("List_suar")
                                        move(index)

                                    }}
                                >
                                    <Image
                                        source={item.icon}
                                        style={styles.image}
                                        resizeMode="contain"
                                    >

                                    </Image>
                                    <Text style={styles.texttitle}>{item.name}</Text>
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
        height: height * .1,
        width: width * 1.1,
        alignItems: "center",
        justifyContent: "center"

    },
    TextHeader: {
        fontSize: 20,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular"
    }, containeer2: {
        width: width,
        height: height * .76,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: height * .07
    },
    button: {
        height: height * .2,
        width: width * .9,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowColor: Const_Component.header_text,
        marginVertical: 2,
        borderRadius: 10
    },
    image: {
        height: height * .1,
        width: width * .3,
        marginVertical: height * .01
    },
    texttitle: {
        fontSize: 12,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular"

    }
});

export default Home;
