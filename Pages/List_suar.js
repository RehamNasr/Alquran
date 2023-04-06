

import React, { useState, useEffect } from 'react'
import {
    View,
    ImageBackground,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    TextInput
} from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AnimatedCircularProgress } from "react-native-circular-progress"
const { height, width } = Dimensions.get("window")
import * as Const_Component from '../Constant/Const_Component';
import { err } from 'react-native-svg/lib/typescript/xml'
function List_suar({ navigation }) {

    const [list, setList] = useState([])
    const [listBackup, setListBackup] = useState([])
    const [keysearch, setKeysearch] = useState('')

    useEffect(() => {
        fetch("http://api.alquran.cloud/v1/meta").
            then((Response) => Response.json()).
            then((json) => {
                setList(json.data.surahs.references)
                setListBackup(json.data.surahs.references)

            }).
            catch((error) => console.log(error))
    }, [])
    const search = (value) => {
        setList(listBackup.filter(((it) => it.name.match(value))))
    }
    return (
        <>
            <StatusBar backgroundColor={Const_Component.Back_color}></StatusBar>

            <View
                style={styles.containeer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.touch}
                    onPress={()=>{
                        navigation.navigate("Home")
                    }}
                    >
                        <SimpleLineIcons name="home" style={styles.icon}></SimpleLineIcons>
                    </TouchableOpacity>
                    <View style={{ ...styles.touch, flex: 2 }}>
                        <Text style={styles.TextHeader}>القرأن</Text>
                    </View>

                    <TouchableOpacity style={styles.touch}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <SimpleLineIcons name="arrow-right-circle" style={styles.icon}></SimpleLineIcons>
                    </TouchableOpacity>

                </View>

                <View style={styles.rowsearch}>
                    <AntDesign name="search1" style={styles.iconsearch} />
                    <TextInput
                        style={styles.textinput}
                        placeholder="ادخل اسم السوره"
                        value={keysearch}
                        onChangeText={(value) => {
                            setKeysearch(value)
                            search(value)
                        }}
                    >

                    </TextInput>


                </View>
                <ScrollView>
                    {
                        list.map((item, index) =>
                            <TouchableOpacity
                                style={styles.row}
                                onPress={() => {
                                    navigation.navigate("Ayat", {
                                        index: index
                                    })
                                    // move(index)

                                }}

                            >

                                <Text style={styles.name}>{item.name} </Text>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
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
        color: Const_Component.header_text,
        fontSize: 18
    },
    TextHeader: {
        fontSize: 20,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
    },
    rowsearch: {
        height: height * .06,
        width: width * .9,
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row",
        borderWidth: .2,
        borderRadius: 5,
        paddingHorizontal: 5,
        justifyContent: "space-around"
    },
    iconsearch: {
        fontSize: 15,
        color: "#000",

    },
    textinput: {
        height: height * .05,
        width: width * .78,
        alignSelf: "center",
        fontFamily: "Marhey-Regular",
        fontSize: 10,
        color: "#000"
    },
    row: {
        height: height * .1,
        width: width * .8,
        justifyContent: "center",
        padding: 5,
        elevation: 5,
    },
    name: {
        fontSize: 15,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
    }
});
export default List_suar;