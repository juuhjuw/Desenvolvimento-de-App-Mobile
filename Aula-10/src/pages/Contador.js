import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Contador() {

    const [valor, setValor] = useState(0);
    const [visivel, setVisivel] = useState(false);

    function incrementar() {
        console.log('valor atual: ', valor);
        setValor(valor + 1);
        console.log('novo valor: ', valor);
    }

    function decrementar() {
        console.log('valor atual: ', valor);
        setValor(valor - 1);
        console.log('novo valor: ', valor);
    }

    function toggle() {
        setVisivel(!visivel);
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button
             title="+" 
             color="#008cff"
             onPress={incrementar} />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{valor}</Text>
           
            <Button
             title="-" 
             color="#008cff"
             onPress={decrementar} />

            {visivel ? (<Text>Esse texto é um segredo!</Text>) : false}

            <Button
             title={visivel ? "Esconder" : "Mostrar"} 
             color="#008cff"
             onPress={toggle} />

        </View>
    );}