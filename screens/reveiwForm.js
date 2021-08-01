import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
    
    return(
        <View style={globalStyles.container}>
            <Formik
                // 우리의 form에 사용될 field들과 초기값을 정한다
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                // 우리가 Form을 submit할때 실행될 함수
                // values인자는 form을 submit할때 가지고 있는 fields의 값들을 갖고있다
                // actions인자에는 우리가 부를수 있는 함수들이 정이되어있다. 예를들어서 form reset하기
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline 
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Button 
                            title='submit' 
                            color='maroon' 
                            // props.handleSubmit은 <Formik> 태크의 onSubmit 속성에 들어있는 함수를 부른다
                            onPress={props.handleSubmit} 
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}