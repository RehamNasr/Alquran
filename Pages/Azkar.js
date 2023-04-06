

import * as React from 'react'
import { View, ImageBackground, ScrollView, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { AnimatedCircularProgress } from "react-native-circular-progress"
const { height, width } = Dimensions.get("window")
import * as Const_Component from '../Constant/Const_Component';
function Azkar() {

    const [counter, setCounter] = React.useState(0)
    const [fill, setFill] = React.useState(0)
    const [text, setText] = React.useState("سبحان الله")
    // const [list,setlist]=uswState()
    const array_text = () => {
        var text_loop = ["Çááå ÇßÈÑ", "ÇáÍãÏááå", "ÓÈÍÇä Çááå", "ÓÈÍÇä Çááå æ ÈÍãÏå ÓÈÍÇä Çááå ÇáÚÙíã"
            , "áÇ Íæá æ áÇ Þæå ÇáÇ ÈÇááå", "ÇÓÊÛÝÑ Çááå æ ÇÊæÈ Çáíå", "ÍÓÈí Çááå æ äÚã Çáæßíá", "áÇ Çáå ÇáÇ Çááå"]
        var last_index = text_loop.indexOf(text)
        var count = counter
        if (count == 33) {
            setText(text_loop[last_index + 1])
        }

    }







    return (<>

        <View
            style={styles.containeer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.touch}>
                    <SimpleLineIcons name="arrow-left-circle" style={styles.icon}></SimpleLineIcons>
                </TouchableOpacity>
                <View style={{ ...styles.touch, flex: 2 }}>
                    <Text style={styles.TextHeader}>السبحة</Text>
                </View>
                <TouchableOpacity style={styles.touch}>
                    <SimpleLineIcons name="home" style={styles.icon}></SimpleLineIcons>
                </TouchableOpacity>


            </View>

            <Text style={styles.zakr}>{text} </Text>
            <Text style={{ ...styles.zakr, marginTop: 0, elevation: 10 }}> {counter}</Text>
            <TouchableOpacity
                style={{ marginTop: height * .05 }}
                onPress={() => {
                    array_text();
                    if (counter < 33) {
                        setCounter(counter + 1)
                        setFill(fill + 3.03)
                    }
                    else {
                        setCounter(0)
                        setFill(0)

                    }
                }}>

                <AnimatedCircularProgress
                    size={150}
                    width={5}
                    fill={fill}
                    tintColor="#28a745"
                    backgroundColor="#fff"

                >
                    {
                        (fill) => (
                            <>

                                <Image
                                    source={require("../Constant/Images/click.png")}
                                    style={styles.image}
                                >

                                </Image>
                            </>
                        )


                    }
                </AnimatedCircularProgress>
            </TouchableOpacity>
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
        flex: 1,
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
    }, zakr: {
        fontSize: 22,
        color: Const_Component.header_text,
        fontFamily: "Marhey-Regular",
        marginVertical: height * .06
    },
    containeer2: {
        width: width,
        height: height * .8,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    button: {
        height: height * .2,
        width: width * .47,
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowColor: Const_Component.header_text,
        marginVertical: 5,
        borderRadius: 2
    },
    image: {
        height: height * .06,
        width: width * .1,
        marginVertical: height * .01
    },
    texttitle: {
        fontSize: 13,
        color: Const_Component.title_text,
        fontFamily: "Marhey-Regular",
        height: height * .09
    }
});
export default Azkar;