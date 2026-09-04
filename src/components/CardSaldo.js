import {StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CardSaldo({ saldo, gastos }) {
    return (
        <View style={estilos.cartao}>
            <View style={estilos.coluna}>
                <Text style={estilos.rotulo}>Saldo</Text>
                <Text style={[estilos.valor, estilos.textoVerde]}>{saldo}</Text>
            </View>
                    <View style={estilos.coluna}>
                            <Text style={estilos.rotulo}>Gastos</Text>
                            <Text style={[estilos.valor, estilos.textoVermelho]}>{gastos}</Text>
                    </View>

        </View>
    )
    }

    const estilos = StyleSheet.create({
        cartao: {
            backgroundColor: '#FFF',
            borderRadius: 5,
            padding: 20,
            marginTop: -25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            elevation: 3,
        },
        coluna: {
            flex: 1,
        },
        rotulo: {
                color: '#AAAAAA',
            fontSize: 16,
            marginBottom: 4,
        },
        valor: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        textoVerde: {
            color: '#00C853',
        },
        textoVermelho: {
            color: '#FF5252',
        }
    })