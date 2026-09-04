import { StyleSheet, View, Text, ScrollView, Touchable} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import CardSaldo from "../components/CardSaldo";
import ItemLancamento from "../components/ItemLancamento";


export default function Home() {
  const lancamentos = [
    { id: '1', data: '16/08/2026', titulo: 'Salário', valor: 'R$ 22.000,00', tipo: 'entrada' },
    { id: '2', data: '16/08/2026', titulo: 'Investimento', valor: 'R$ 450,00', tipo: 'entrada' },
    { id: '3', data: '16/08/2026', titulo: 'Combustível', valor: 'R$ -155,27', tipo: 'saida' },
    { id: '4', data: '17/08/2026', titulo: 'Parcela Celular 7/12', valor: null },
    { id: '5', data: '17/08/2026', titulo: 'Tênis', valor: null },
    { id: '6', data: '18/08/2026', titulo: 'Parcela Apê 27/180', valor: 'R$ -723,82', tipo: 'saida' },
    { id: '7', data: '20/08/2026', titulo: 'Fone de ouvido', valor: null },
  ];

    const handlePressBotao = (nomeMenu) => {
        console.log(`Botão clicado: ${nomeMenu}`);
    }

  return (
    <ScrollView style={estilos.container}>
      <Header nome="Ana Julia Prado" />
      <CardSaldo saldo="R$ 2.321,55" gastos="R$ -2.029,88" />

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.menuIcones}>
        <View style={estilos.circuloIcone}><AntDesign name="folder-add" size={24} color="black" /></View>
        <View style={estilos.circuloIcone}><AntDesign name="tag" size={24} color="black" /></View>
        <View style={estilos.circuloIcone}><AntDesign name="credit-card" size={24} color="black" /></View>
        <View style={estilos.circuloIcone}><AntDesign name="barcode" size={24} color="black" /></View>
        <View style={estilos.circuloIcone}><AntDesign name="setting" size={24} color="black" /></View>
        <View style={estilos.circuloIcone}><AntDesign name="user-switch" size={24} color="black" /></View>
      </ScrollView>

     
      <View style={estilos.secaoLancamentos}>
        <Text style={estilos.tituloSecao}>Últimos lançamentos</Text>
        {lancamentos.map((item) => (
          <ItemLancamento
            key={item.id}
            data={item.data}
            titulo={item.titulo}
            valor={item.valor}
            tipo={item.tipo}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  menuIcones: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,

  },
  circuloIcone: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 32,
  },
  secaoLancamentos: {
    marginTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});