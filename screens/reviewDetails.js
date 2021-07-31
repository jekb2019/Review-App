import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

// 전달받은 정보는 route prop으로 접근할 수 있다 
export default function ReviewDetails({ route, navigation }) {
    const {title, body, rating} = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    )
}