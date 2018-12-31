import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>   //container
    );

};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,    //rounded corner
        borderColor: '#ddd',
        borderBottomWidth: 0,   //bottom will not have border
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },  //no left or right but bottom
        shadowOpacity: 0.1,     //darkness
        shadowRadius: 2,    //rounded corner like border
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }

}

export default Card;