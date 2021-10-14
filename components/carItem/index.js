import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import StyleButton from '../StyleButton';
import styles from './styles';

const CarItem = (props) => {

    const {name, taggline, tagglineCTA, image} = props;


    return (
        
        <View style = { styles.carContainer } >

            <ImageBackground 
                source = {image}
                style = {styles.image}
            />
            <View style = { styles.titles } >
                <Text style = { styles.title } >{name}</Text> 
                <Text style = { styles.subtitle } >
                    {taggline}
                    {' '}
                    <Text style = {styles.subtitleCTA}>
                        {tagglineCTA}
                    </Text>
                </Text>
            </View>
            
            <View style = {styles.buttonsContainer}>
                <StyleButton type = 'primary'
                    content = {"Custom Order"}
                    onPress = {() => {
                        console.warn('Custom Order was pressed')
                    }} />
                <StyleButton type = 'secondary' 
                    content = {'Existing Inventory'}
                    onPress = {() => {
                    console.warn('Existing Inventory was pressed')
                }} />
            </View>


    </View>
    
    )
}

export default CarItem;
