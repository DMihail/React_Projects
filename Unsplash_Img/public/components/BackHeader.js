import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity  } from 'react-native'
import { Icon } from 'react-native-elements'
class BackHeader extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return(
            <View style = {styles.header}>
                <TouchableOpacity onPress = {this.props.onPress} style = {styles.back}>
                    <Icon name="arrow-back" color="white" size={60} style = {styles.back}/>
                </TouchableOpacity>
                <Text style = {styles.text}> {this.props.name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6b6060',
        height: 100,
        justifyContent: 'center',
        paddingLeft: 50,
        paddingTop: 20,
        position: 'relative',
        opacity: 0.3

    },
    text:{
        color: 'white',
        fontSize: 20,
        paddingLeft: 30
    },
    back:{
        position: 'absolute',
        paddingTop: 20
    }
});


export default BackHeader;