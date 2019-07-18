import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native'


class Header extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return(
            <View style = {styles.header}>
                <Text style = {styles.text}>  Unsplash Image</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#9a63d4',
      height: 100,
      justifyContent: 'center',
      paddingLeft: 50,
      paddingTop: 20
  },
    text:{
      color: 'white',
        fontSize: 20,
    }
});


export default Header;