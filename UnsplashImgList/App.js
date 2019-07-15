import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import ImgList from './ImgList';



const Url1 = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
const Url2 = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
const Url3 = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';


export default class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
        ImgData : [],
        stay: false
    }
}
mass = [];
CreateImgList =  async (URL) => {
    try {
            const response = await fetch(URL);
            const data =  await response.json();
            this.mass.push(data);
            console.log(this.mass)
           // this.setState({ImgData : this.mass})
        this.setState({ImgData : data})
        }catch (e) {
            throw e;
        }

};

Get(){
    this.CreateImgList(Url1);
      this.CreateImgList(Url2);
      this.CreateImgList(Url3);
}

render() {

    const {ImgData, stay} = this.state;
    if (!stay) {
        this.Get();
       this.state.stay = true;
   }

        return (
            <View>
                <ScrollView>
                {ImgData.map( item => {
                   // console.log(item);
                  return  <ImgList img = {item['urls']['raw']} key = {item['id']} name = {item['user']['name']}/>
                })}
                </ScrollView>
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
