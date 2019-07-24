import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
} from 'react-native'

const Screen =  Dimensions.get('window');
const  ScreenWidth = Screen.width;
const  ScreenHeight = Screen.height;

class ImgList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            load : false,
            ImgStyle : 'none',
            Indicator : 'flex'
        }
    }

    render() {

        if (this.state.load) {
            this.state.ImgStyle = 'flex';
            this.state.Indicator = 'none';
        }
            return (
                <View style={styles.view}>
                    <TouchableOpacity onPress={this.props.onPress}
                    >
                        <ActivityIndicator size="large" color="#0000ff" style = {{ height: ScreenHeight/3,
                            width: ScreenWidth/3,
                            display : this.state.Indicator}} />
                        <Image
                            onLoadEnd={(e) => {
                                this.setState({load: true});
                            }}
                            key={this.props.id}
                            style={{display: this.state.ImgStyle, height: ScreenHeight/3,
                                width: ScreenWidth/3}}
                            source={{uri: this.props.img}}
                        />
                        <Text style={{fontSize: 20, display: this.state.ImgStyle, width: ScreenWidth/4}}>{this.props.name}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
 }


const styles = StyleSheet.create({
    view:{
        paddingLeft: 30,
        paddingTop: 30
    }
});

export default ImgList;