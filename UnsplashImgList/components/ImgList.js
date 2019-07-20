import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {
    UNSPLASH_LIST,
    UNSPLASH_IMG
} from "../route";


const Screen =  Dimensions.get('window');
const  ScreenWidth = Screen.width;
const  ScreenHeight = Screen.height;

class ImgList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
       // const {navigation} = this.state;
        return(
            <View style = {styles.view}>
                <TouchableOpacity
                   // onPress={() => navigation.navigate(UNSPLASH_IMG)}
                >
                <Image
                    key= {this.props.id}
                    style={styles.Img}
                    source={{uri: this.props.img}}
                />
                <Text style = {styles.text}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
 }

const styles = StyleSheet.create({
    view:{
        paddingLeft: 30,
        paddingTop: 30,
    },
    Img: {
        height: ScreenHeight/3,
        width: ScreenWidth/3,
    },
    text:{
        fontSize: 20,
    }
});

export default ImgList;