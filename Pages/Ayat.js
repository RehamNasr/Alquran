

import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet, StatusBar, ScrollView
} from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window")
import Sound from 'react-native-sound';
import * as Const_Component from '../Constant/Const_Component';
import ContentLoader from 'react-native-easy-content-loader'
function Ayat({ navigation, route }) {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [index_aya, setIndex_aya] = useState(1)
    const [loading, setLoading] = useState(true)
    const index = route.params.index;

    useEffect(() => {
        fetch("http://api.alquran.cloud/v1/quran/ar.alafasy").
            then((Response) => Response.json()).
            then((json) => {
                setLoading(true)
                setList(json.data.surahs[index])
                setList2(json.data.surahs[index].ayahs)
                setLoading(false)
            }).
            catch((error) => console.log(error))
    }, [])

    const [music, setMusic] = useState(null)


    const play = (link) => {
        let summer = new Sound(link, null, (err) => {
            if (err) {
                console.log('hata', err)
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
    // useEffect(() => {
    //     if (music) {
    //         let id = setInterval(() => {
    //             music.getCurrentTime((second, play) => {
    //                 // setSecond(second)
    //             })
    //         }, 100)
    //     }
    // }, [music])

    return (
        <>
            <StatusBar backgroundColor={Const_Component.Back_color}></StatusBar>

            <View
                style={styles.containeer}>



                <View style={styles.header}>

                    <TouchableOpacity style={styles.touch}
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                    >
                        <SimpleLineIcons name="home" style={styles.icon}></SimpleLineIcons>
                    </TouchableOpacity>
                    <View style={{ ...styles.touch, flex: 2 }}>
                        <Text style={styles.TextHeader}>{list.name}</Text>
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


                    <View style={styles.box}>
                        {
                            loading ?
                                <View
                                    style={{
                                        height: height * .9,
                                        width: width * .9
                                    }}
                                >

                                    <ContentLoader
                                        active
                                        pRows={20}
                                        pWidth={"98%"}
                                        pHeight={"2%"}
                                        reverse={true}

                                    />
                                </View> :
                                <>
                                    {
                                        list2.map((item, index) =>
                                            <>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        play(item.audio)
                                                    }}
                                                >
                                                    <Text style={styles.Textaya}>{item.text}</Text>
                                                </TouchableOpacity>
                                                <ImageBackground
                                                    source={require("../Constant/Images/star.png")}
                                                    style={styles.image}
                                                >
                                                    <Text style={styles.number}>{item.number}</Text>
                                                </ImageBackground>
                                            </>)
                                    }
                                </>
                        }



                    </View>
                </ScrollView>
                <View style={styles.lastrow}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (music != null)
                                music.play()
                        }}
                    >
                        <AntDesign name="playcircleo" style={styles.icon}></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (music != null)
                                music.pause()
                        }}
                    >
                        <AntDesign name="pausecircleo" style={styles.icon}></AntDesign>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (music != null)
                                music.stop()
                        }}
                    >
                        <Ionicons name="stop" style={styles.icon} />


                    </TouchableOpacity>
                </View>




            </View>


        </>)

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
        color: Const_Component.title_text,
        fontSize: 18,
    },
    TextHeader: {
        fontSize: 20,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
    },
    Textaya: {
        fontSize: 14,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular",
        marginHorizontal: 4,
    },
    containeer2: {
        width: width,
        height: height * .8,
        flexDirection: "row",
        flexWrap: "wrap",
        // justifyContent: "space-around"
    }, box: {
        width: width * .9,
        flexWrap: "wrap",
        flexDirection: "row-reverse",
        alignItems: "center",
        // justifyContent: "center",
    },
    button: {
        height: height * .08,
        width: width * .2,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Const_Component.header_text,
        marginVertical: 5,
        borderRadius: 2
    },
    image: {
        height: height * .03,
        width: width * .064,
        marginVertical: height * .01,
        alignItems: "center",
        justifyContent: "center",
    },
    texttitle: {
        fontSize: 15,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular",
        height: height * .09
    },
    number: {
        fontSize: 5,
        color: "#000"
    },
    lastrow: {
        height: height * .06,
        width: width * .6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: height * .02,
        elevation: 1,
    }
});
export default Ayat;