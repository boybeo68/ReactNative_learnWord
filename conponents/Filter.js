import React, {Component} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux'

// import styles from './styles';

class Filter extends Component {
    getStyleButton(filterAction) {
        const {filter} = this.props;
        if (filter === filterAction) return {color: '#ebff7d', fontWeight: 'bold', fontSize: 20};
        return {color: '#fff'}
    };
    senActionButton(actionType){
        this.props.dispatch({type:actionType});
    };
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: '#cb8b2c'
            }}>
                <TouchableOpacity onPress={()=>this.senActionButton('FILTER_ShowAll')}>
                    <Text style={this.getStyleButton('ShowAll')}>
                        Show all
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.senActionButton('FILTER_Memoried')} >
                    <Text style={this.getStyleButton('Memoried')}>
                        Memoried
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.senActionButton('FILTER_NeedPractice')} >
                    <Text style={this.getStyleButton('NeedPractice')}>
                        Need Practice
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProp(state) {
    return {filter: state.filter}
}

export default connect(mapStateToProp)(Filter)