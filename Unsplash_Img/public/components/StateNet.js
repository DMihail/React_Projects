import {NetInfo, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet, View, Image, Text}from 'react-native'

NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected)
    {
        Alert.alert('Internet is connected');

    }
    else {
        Alert.alert('not');
    }
});


class StateNet extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         stateNet: undefined
    //     }
    // }

    render() {
        return(

            <View>
                <Image
                    onLoadEnd={(e) => {
                        this.setState({load: true});
                    }}
                    key={this.props.id}
                    style={{display: this.state.ImgStyle, height: ScreenHeight/3,
                        width: ScreenWidth/3}}
                    source={require('../../assets/wifi-icon.png')}
                />
                    <Text>No network connection</Text>
            </View>

        );
    }
}


export default StateNet