import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Image } from 'react-native'

class Backgraund extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View>
                <Image
                    style={{width: '100%', height: '100%'}}
                    source={{uri: "https://images.unsplash.com/photo-1563445192071-fb5b2fa4ad62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ"}}
                />
            </View>
        );
    }
}


export default Backgraund;