import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyleButton = (props) => {

   const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#151B54' : '#DCDCDC';
    const textColor = type === 'primary' ? '#DCDCDC' : '#544E15';


    return (
        <View style = {styles.container}>
            <Pressable
            style = {[styles.button, {backgroundColor : backgroundColor}]}
            onPress={() => onPress()}
            >

                <Text style = {[styles.text, {color : textColor}]}>{content}</Text>   
            
            </Pressable>
        </View>
    )
}

export default StyleButton;
