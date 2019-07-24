import React from 'react';
import {
    View,
    Dimensions,
    ActivityIndicator,
    Image
} from 'react-native'
import BackHeader from '../components/BackHeader'
import {
    UNSPLASH_LIST
} from "../../route";

const Screen =  Dimensions.get('window');
const  ScreenWidth = Screen.width;
const  ScreenHeight = Screen.height;

class AllScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            load : false,
            ImgStyle : 'none',
            Indicator : 'flex'
        }
    }
    render() {
        const {navigation} = this.props;
       const {img, name, header} = navigation.state.params;
       // console.log(img, name, header);
        if (this.state.load) {
            this.state.ImgStyle = 'flex';
            this.state.Indicator = 'none';
        }
        return(
            <View>
                {/*<BackHeader name = {header} onPress = {() => navigation.navigate(UNSPLASH_LIST)}/>*/}
                <ActivityIndicator size="large" color="#0000ff" style = {{ height: ScreenHeight/2,
                    width: ScreenWidth/2, paddingLeft: ScreenWidth/2, paddingTop: ScreenHeight/2,
                    display : this.state.Indicator
                    }}
                />
                <Image source={{uri: img}} style={{width: ScreenWidth , height: ScreenHeight  , position:"absolute"}}
                                 onLoadEnd={(e) => {
                                     this.setState({load: true});
                                 }}>
                </Image>
            </View>
        );
    }
}


export default AllScreen;