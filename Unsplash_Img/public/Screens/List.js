import React from 'react';
import {StyleSheet, View, ScrollView, Alert}from 'react-native'
import ImgList from '../components/ImgList';
import Backgraund from '../components/Backgraund'
import Header from '../components/Header'
import {
    UNSPLASH_IMG
} from "../../route";
const Url1 = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
const Url2 = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
const Url3 = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImgData: [],
            stay: false,
            img: undefined,
            bag: false,
            height: 0
        }
    }

    mass = [];
    CreateImgList = async (URL) => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            this.mass = [...this.mass, ...data];
            this.setState({ImgData : this.mass});
        } catch (e) {
            throw e;
        }

    };

    Get() {
        this.CreateImgList(Url1);
        this.CreateImgList(Url2);
        this.CreateImgList(Url3);
    }

    render() {


        const YourComplement = () => {
            const netInfo = useNetInfo();
            console.log(netInfo)
        }
        //console.log(this.state.bag);
        if (!this.state.bag) {
            const {ImgData, stay} = this.state;
            if (!stay) {

                this.Get();
                this.state.stay = true;
            }
                const {navigation} = this.props;
            return (
                <View>
                    <Header/>
                    <ScrollView
                        onContentSizeChange = {(w, h)=>{
                            this.state.height = h;
                           // console.log(this.state.height )
                        }}
                        crollEventThrottle={1}
                        onScroll={(e)=>{
                            if ( e.nativeEvent.contentOffset.y >= (this.state.height - 1000))  {
                                 console.log('y', e.nativeEvent.contentOffset.y);
                               // this.state.bag = false;
                                this.setState({bag: false})
                            }
                        }}
                    >
                        <View style={styles.List}>
                            {ImgData.map(item => {
                                let obj = {
                                    img: item['urls']['full'],
                                    name: item['user']['name'],
                                    header: item['alt_description']
                                };
                                return <ImgList
                                    img={item['urls']['raw']} id={item['id']} name={item['user']['name']}
                                    onPress={() => navigation.navigate(UNSPLASH_IMG,
                                        (obj)
                                    )}
                                />
                            })}
                        </View>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <View>
                    <Backgraund img={this.state.img}/>

                </View>
            );

        }

    }
}

const styles = StyleSheet.create({
    List: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});