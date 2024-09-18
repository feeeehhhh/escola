import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CadastroFornecedor from './missaopratica/cadastro';
import ListagemFornecedores from './missaopratica/listagem';


export default function App() {
  return (
    <View >
      <CadastroFornecedor/>
      <ListagemFornecedores/>
    </View>
  );
}

