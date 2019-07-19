import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'


class Backgraund extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View>
                <ImageBackground source={{uri: this.props.img}} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
            </View>
        );
    }
}


export default Backgraund;