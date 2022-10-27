import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            frase: '', 
            image : require('./src/image/biscoito.png'),
        };

        this.abrirBiscoito = this.abrirBiscoito.bind(this);
        this.frases = [
            'Siga os bons e aprenda com eles.', 
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }

    abrirBiscoito() {

        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

        this.setState({ 
            frase: ' " ' + this.frases[numeroAleatorio] + ' " ',
            image: require('./src/image/biscoitoAberto.png')
        });
    }

    render(){
        return(
            <View 
                style={ styles.container }
            >
                <Image 
                    style={ styles.image } 
                    source={ this.state.image }
                />

                <Text style={ styles.text }>
                    { this.state.frase }
                </Text>

                <TouchableOpacity 
                    style={ styles.button }
                    onPress={ this.abrirBiscoito }
                >
                    <View style={ styles.btnView }>
                        <Text style={ styles.btnText }>
                            Abrir Biscoito
                        </Text>
                    </View>
                </TouchableOpacity>
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
        color: '#dd7b22',
        fontStyle: 'italic',
        margin: 30,
        textAlign: 'center',
    },
    image : {
        height: 250,
        width: 250,
    },
    button : {
        height: 50,
        width: 230,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#dd7b22',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;

