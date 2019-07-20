import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text } from 'react-native'




class Backgraund extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {image} = this.props.navigation.state.params;
        return(
            <View>
                <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
            </View>
        );
    }
}


export default Backgraund;