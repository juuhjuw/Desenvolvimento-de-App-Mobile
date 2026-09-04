import {View, Text, StyleSheet} from "react-native"
import { Feather } from "@expo/vector-icons"

export default function Header({ nome }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.nome}>{nome}</Text>
            <View style={estilos.fotoPerfil}>
                <Feather name="user" size={24} color="black" style={estilos.iconePerfil} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: '#7000FF',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nome: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    fotoPerfil: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#E0C3FC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconePerfil: {
        fontSize: 24,
    },
    })
