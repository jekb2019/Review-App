// We will configure the Stack Navigator here
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

// Navigation관련 컴포넌트 를 받아오는 createStackNavigator() 호출
const { Navigator, Screen } = createStackNavigator();

// HomeNavigator 컴포넌트 만들기
const AboutStack = () => (
    <Navigator>
        <Screen 
            name="About" 
            component={About}
            // 옵션에 
            options = {({ navigation }) => {
                return {headerTitle: () => <Header navigation={navigation} title='About' />}
            }}
            // options={({ navigation }) => {
            //     return {
            //         headerTitle: () => <Headers navigation={navigation} title='About'/>,
            //     }
            // }}
        />
    </Navigator>
)

export default AboutStack;