import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

// validation schema. 키는 Formik form에 있는 field들을 의미한다. 값으로는 validation이들어온다.
// validation을 chaining해서 작성할 수 있다.
const reviewSchema = yup.object({
    title: yup
        .string() // 값이 string이여야 한다
        .required() // 값이 비어있으면 안된다
        .min(4), // 4 characters 이상이여야한다
    body: yup
        .string()
        .required()
        .min(8),
    rating: yup
        .string() // 값이 string이여야 한다고 설정했다 (왜냐하면 RN에서 기본으로 string을 넘겨주기때문)
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

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
                validationSchema={reviewSchema}
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
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {/* props.touched.title은 어떤 title field가 터치되었는지 track 한다. 터치가 되었으면 true를 갖는다*/}
                            {props.touched.title && props.errors.title}
                        </Text>
                        <TextInput
                            multiline 
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.body && props.errors.body}
                        </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.rating && props.errors.rating}
                        </Text>
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}