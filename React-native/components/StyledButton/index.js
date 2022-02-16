import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';


const StyleButton = (props) => {
    
    const {type, content} = props;
    
    const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';    
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';    
    
    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>

    );
};

export default StyleButton;