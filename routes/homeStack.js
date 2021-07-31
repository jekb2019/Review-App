// We will configure the Stack Navigator here
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

// Navigation관련 컴포넌트 를 받아오는 createStackNavigator() 호출
const { Navigator, Screen } = createStackNavigator();

// HomeNavigator 컴포넌트 만들기
const HomeStack = () => (
    <Navigator>
        <Screen 
            name="Home" 
            component={Home} 
            // 아래와 같이 콜백을 option으로 주면 자동으로 navigation 객체에 접근이 가능하다.
            // navigation객체 안에는 navigation, route 두가지에 객체가 들어있다. 우리가 필요한 것은 navigation이므로
            // 미리 destructuring을 해놓은 인자를 보내주자.
            options = {( {navigation} ) => {
                return {headerTitle: () => <Header navigation={navigation} title='Book Zone' />}
            }}
        />
        <Screen 
            name="Details" 
            component={ReviewDetails} 
            options = {{
                title: "Review Details"
            }}
        />
    </Navigator>
)

export default HomeStack;