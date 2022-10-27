import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class App extends Component {
    render(){
        return(
            <View 
                style={ styles.container }
            >
                <Image style={ styles.image } source={{}}/>

                <Text style={ styles.text }>
                    teste
                </Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize: 24,
    },
    image : {

    },
});

export default App;

