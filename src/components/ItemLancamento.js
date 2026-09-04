import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ItemLancamento({ data, titulo, valor, tipo, censuraInicial = false }) {
  
  const [censurado, setCensurado] = useState(censuraInicial);

  const alternarCensura = () => {
    if (valor) {
      setCensurado(!censurado);
    }
  };

  return (
    <View style={estilos.linha}>
      <View>
        <Text style={estilos.data}>{data}</Text>
        <Text style={estilos.titulo}>{titulo}</Text>
      </View>
          <TouchableOpacity onPress={alternarCensura} activeOpacity={0.6}>
              {valor && !censurado ? (
                <Text
                  style={[
                    estilos.valor,
                    tipo === 'entrada' ? estilos.textoVerde : estilos.textoVermelho,
                  ]}
                >
                  {valor}
                </Text>
              ) : (
        <View style={estilos.tracoCinza} />
              )}
          </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  data: {
    fontSize: 12,
    color: '#BBBBBB',
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2,
  },
  valor: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textoVerde: {
    color: '#00C853',
  },
  textoVermelho: {
    color: '#E53935',
  },
  tracoCinza: {
    width: 80,
    height: 12,
    backgroundColor: '#DDDDDD',
    borderRadius: 6,
  },
});