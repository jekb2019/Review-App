// We will configure the Stack Navigator here
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

// Navigation관련 컴포넌트 를 받아오는 createStackNavigator() 호출
const { Navigator, Screen } = createStackNavigator();

// HomeNavigator 컴포넌트 만들기
const HomeNavigator = () => (
    <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={ReviewDetails} />
    </Navigator>
)

// Navigating하는 컴포넌트 만들고 export
export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
)