import React, {Component} from 'react';

import {View, Text, FlatList, Modal, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux'
import Word_Item from './WordI_Item'
import Filter from './Filter'
import {Icon, Button, Fab} from 'native-base';

// import styles from './styles';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            modalVisible: false,
            en:'',
            vn:'',
        };
    }
    getDataArray() {
        const {filter, defaultArrWords} = this.props;
        if (filter === 'ShowAll') return defaultArrWords;
        if (filter === 'Memoried') return defaultArrWords.filter(item => item.memorized);
        if (filter === 'NeedPractice') return defaultArrWords.filter(item => !item.memorized);
    };
    addItem(){
        this.props.dispatch({
            type:'ADDWORD',
            en:this.state.en,
            vn:this.state.vn
        })
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F5F5F5',}}>
                {this.props.isAdding ? <View
                    style={{flexDirection: 'column', backgroundColor: '#FEFEFE', justifyContent: 'center', margin: 30}}>
                    <TextInput placeholder='inseart Englist' style={{padding: 10, margin: 10}} onChangeText={text => this.setState({en:text})}>
                    </TextInput>
                    <TextInput placeholder='inseart VietNamese' style={{padding: 10, margin: 10}} onChangeText={text => this.setState({vn:text})}>
                    </TextInput>
                    <TouchableOpacity>
                        <Text style={{textAlign: 'center'}} onPress={()=>{this.addItem()}}>Add</Text>
                    </TouchableOpacity>

                </View> : null }
                <View style={{flex: 10}}>
                    <FlatList data={this.getDataArray()}
                              renderItem={({item}) => <Word_Item word={item}/>}
                              keyExtractor={item => item.id.toString()}>
                    </FlatList>
                </View>
                <Fab
                    active={this.state.active}
                    direction="up"
                    style={{backgroundColor: '#cb8b2c', marginBottom: 50}}
                    position="bottomRight"
                    onPress={() => {
                        this.props.dispatch({type:'SHOWADDITEM'})
                    }}>
                    <Icon name="ios-add"/>
                </Fab>
                <Filter/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {filter: state.filter, defaultArrWords: state.defaultArrWords, isAdding: state.isAdding}
}

export default connect(mapStateToProps)(Main)