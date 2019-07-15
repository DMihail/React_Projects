import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import ImgList from './ImgList';



const Url1 = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
const Url2 = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
const Url3 = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';


export default class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
        ImgData : [],
        st: false
    }
}

CreateImgList =  async (URL) => {
    try {
            const response = await fetch(URL);
            const data =  await response.json();
            this.setState({ImgData:data})
        }catch (e) {
            throw e;
        }

};

Get(){
    this.CreateImgList(Url1);
}

render() {
    if (!this.state.s1) {
        this.Get()
        this.state.s1 = true;
    }

// this.CreateImgList(Url2);
// this.CreateImgList(Url3);
//         //if (ImgData.length > 0) {
            // console.log(this.state.ImgData[0]);
//       //  }
//         this.state.ImgData.map( item => {
//             console.log(item['id'])
//         }
//         );
        return (
            <View>
                {this.state.ImgData.map( item => {
                     //console.log(item['id'], item['urls']['raw'], item['user']['name'])
                    <ImgList  id = {item['id']} img = {item['urls']['raw']} name = {item['user']['name']}/>
                })}
            </View>
        );
    }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
