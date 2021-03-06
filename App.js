import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './conponents/Main'
import {Provider} from 'react-redux'
import store from './redux/store'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}


