import React, { Component } from 'react';

import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import {connect} from 'react-redux'

 class Word_Item extends Component {
    checkMemorize(actionName){
        this.props.dispatch({
            type:actionName,
            id:this.props.word.id
        })
    };
     _renderVietNam(word) {
         if (word.isShow) {
             return (
                 <Text style={{ fontSize: 10, backgroundColor:'#F5F5F5', padding:10, margin:5}}> {this.props.word.vn} </Text>
             );
         } else {
             return null;
         }
     }
  render() {
      const {word} = this.props;
      const textDecorationLine = word.memorized ? 'line-through' : 'none';
      const color = word.memorized ? '#583727' : '#3b93ff';
      const textMem = word.memorized ? 'forget' : 'memorized';
    return (
      <View style={{flexDirection:'column', padding: 10 , margin: 10, backgroundColor:'#FEFEFE', shadowRadius: 20}}>
          <Text style={{textDecorationLine, color, fontSize:20}}>{this.props.word.en}</Text>
          {this._renderVietNam(word)}
          <View style={{flexDirection:'row',justifyContent: 'flex-end'}}>
              <TouchableOpacity style={styles.button} onPress={()=> this.checkMemorize('TOGGLE_MEMMORIZE')}>
                  <Text style={styles.styleText}>{textMem}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=> this.checkMemorize('TOGGLE_SHOW')}>
                  <Text style={styles.styleText}>show</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    button:{
        padding: 6,
        margin: 10,
        backgroundColor:'#F5F5F5',
        borderRadius:10,
    },
    styleText:{

    }
});

function mapToProp(state) {

}

export default connect()(Word_Item)