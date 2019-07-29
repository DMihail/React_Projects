import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native'

const Screen =  Dimensions.get('window');
const  ScreenWidth = Screen.width;
const  ScreenHeight = Screen.height;


class StateNet extends React.Component{
    render() {
        return(

            <View style = {styles.view}>
                <Image
                    onLoadEnd={(e) => {
                        this.setState({load: true});
                    }}

                    source={require('../../assets/wifi-icon.png')}
                />
                    <Text style = {styles.text}>No network connection</Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    view:{
        paddingLeft: ScreenWidth/6,
        paddingTop: ScreenHeight/4
    },
    img:{

    },
    text: {
        fontSize: 30,
        paddingLeft: ScreenWidth/6
    }
});



export default StateNet