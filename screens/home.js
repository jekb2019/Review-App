import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Atomic Habits', rating: 5, body:'lorem ipsum', key: '1'},
        {title: 'Fly to the Moon', rating: 4, body:'lorem ipsum', key: '2'},
        {title: 'Strong Boy', rating: 3, body:'lorem ipsum', key: '3'},
    ]);

    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    // navigate()의 두번째 인자는 새로운 스크린으로 이동할때 전달할 정보를 JSON 형식으로 담는다
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}> 
                        <Card>
                            {/* 아래와 같이 nest를 하면 Card의 props.children으로 전달이 된다 */}
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}