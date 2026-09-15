import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

const dadosForms = {
  nome: '',
  idade: '',
  senha: '',
  maisInfos: '',
};

export default function Home() {

  const [nomeestado, setNomeEstado] = useState('');

  function aoDigitar(textoDigitado) {
    console.log(`Texto digitado: ${textoDigitado}`);
    setNomeEstado(textoDigitado);
    dadosForms.nome = textoDigitado;
  }

  function aoEnviar() {
        //Destructuring  do objeto
        const { nome, idade, senha, maisInfos } = dadosForms;
        console.log('Formulario enviado!: ',{
            nome,
            idade,
            senha: '*'.repeat(senha.length),
            maisInfos
        });
        //chamada de backend passando "dadosForms" como parametro
  }

  return (
    <View style={styles.container}>
        <Text style={styles.textao}>{nomeestado}</Text>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          onChangeText={aoDigitar}
          value={nomeestado}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade..."
          onChangeText={(texto) => {
            dadosForms.idade = texto;}}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite Sua senha"
        onChangeText={(texto) => {
            dadosForms.senha = texto;
          }}
        secureTextEntry
        />
      </View>

     <View style={styles.containerInput}>
      <Text style={styles.label}>Fale sobre você:</Text>
      <TextInput
        style={styles.input}
        placeholder="Conte mais sobre você"
        onChangeText={(texto)=> {
            dadosForms.maisInfos = texto;
          }}
        multiline
        maxLength={60}
        />
      </View>

          <Button
            title="Enviar"
            color="#841584"
            onPress={aoEnviar}
          />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginStart: 8,
    },
    input: {
        borderWidth: 2,
        borderColor: '#e7e7e7',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textao: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})