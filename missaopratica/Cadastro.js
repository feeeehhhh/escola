import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const CadastroFornecedor = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.assets) {
        setImagem(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = () => {
    // Aqui você pode salvar as informações no seu backend ou banco de dados
    console.log({ nome, endereco, contato, categoria, imagem });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome do Fornecedor</Text>
      <TextInput 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
        value={nome} 
        onChangeText={setNome} 
        placeholder="Digite o nome" 
      />

      <Text>Endereço</Text>
      <TextInput 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
        value={endereco} 
        onChangeText={setEndereco} 
        placeholder="Digite o endereço" 
      />

      <Text>Contato</Text>
      <TextInput 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
        value={contato} 
        onChangeText={setContato} 
        placeholder="Digite o contato" 
      />

      <Text>Categoria</Text>
      <TextInput 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
        value={categoria} 
        onChangeText={setCategoria} 
        placeholder="Digite a categoria" 
      />

      <Button title="Escolher Imagem" onPress={handleImagePick} />
      {imagem && <Image source={{ uri: imagem }} style={{ width: 100, height: 100, marginTop: 10 }} />}
      
      <Button title="Salvar Fornecedor" onPress={handleSubmit} />
    </View>
  );
};

export default CadastroFornecedor;
