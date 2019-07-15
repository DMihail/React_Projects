import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

class ImgList extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        console.log();
        return(
            <View>

                <Image
                    id = {this.props.key}
                    style={{width: 100, height: 100}}
                    source={{uri: this.props.img}}
                />
                <Text>{this.props.name}</Text>
            </View>
        );
    }
 }


export default ImgList;