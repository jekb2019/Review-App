import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reveiwForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Atomic Habits', rating: 5, body:'lorem ipsum', key: '1'},
        {title: 'Fly to the Moon', rating: 4, body:'lorem ipsum', key: '2'},
        {title: 'Strong Boy', rating: 3, body:'lorem ipsum', key: '3'},
    ]);

    return(
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                    />
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

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

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})