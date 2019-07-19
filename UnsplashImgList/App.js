import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import List from './Screens/List'
import Img from './Screens/AllScreen'
import {
    UNSPLASH_LIST,
    UNSPLASH_IMG
} from "./route";

const AppNavigator = createStackNavigator(
    {
        UNSPLASH_LIST: List,
        UNSPLASH_IMG: Img
    },
    {
        headerMode: "none"
    }
);
export default createAppContainer(AppNavigator);