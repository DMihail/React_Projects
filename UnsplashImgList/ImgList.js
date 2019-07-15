import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

class ImgList extends React.Component{
    render() {
        console.log(this.props.id);
        return(
            <View>
                <Image
                    style={{width: '100px', height: '100px'}}
                    id = {this.props.id}
                    source={{uri: this.props.img}}
                />
                <Text> {this.props.name}</Text>
            </View>
        );
    }
 }


export default ImgList;