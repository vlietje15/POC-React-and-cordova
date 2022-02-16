import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyledButton';
import styles from './styles';


const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../TeslaAssets/assets/images/ModelX.jpeg')}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyleButton 
          type="primary"
          content={"Custom Order"}
        />

        <StyleButton 
          type="secondary"
          content={"Existing Inventory"}
        />

      </View>

    );
};

export default CarItem;