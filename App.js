import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './conponents/Main'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
const defaultState = {
    defaultArrWords: [
        {id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false},
        {id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false},
        {id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false},
        {id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false},
        {id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false},
        {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false},
        {id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false},
        {id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false},
        {id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false},
        {id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false},
        {id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false},
        {id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false},
        {id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false},
        {id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false}
    ],
    filter: 'ShowAll',
    isAdding: false
};
const reduce = (state = defaultState, action) => {
    switch (action.type) {
        case ('FILTER_ShowAll'):
            return {defaultArrWords: state.defaultArrWords, isAdding: state.isAdding, filter: 'ShowAll'};
        case ('FILTER_Memoried'):
            return {...state, filter: 'Memoried'};
        case ('FILTER_NeedPractice'):
            return {...state, filter: 'NeedPractice'};
        case ('TOGGLE_MEMMORIZE'):
            return {
                ...state, defaultArrWords: state.defaultArrWords.map(item => {
                    if (item.id !== action.id) return item;
                    return {...item, memorized: !item.memorized}
                })
            };
        case ('TOGGLE_SHOW'):
            return {
                ...state, defaultArrWords: state.defaultArrWords.map(item => {
                    if (item.id !== action.id) return item;
                    return {...item, isShow: !item.isShow}
                })
            };
        case ('SHOWADDITEM'):
            return {
                ...state, isAdding: !state.isAdding
            };
        case ('ADDWORD'):
            return {
                ...state
            };
    }
    return state;
};
const store = createStore(reduce);


