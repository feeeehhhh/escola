import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';

const fornecedoresMock = [
  { id: '1', nome: 'Fornecedor A', categoria: 'Alimentos', localizacao: 'São Paulo', imagem: 'url_da_imagem1' },
  { id: '2', nome: 'Fornecedor B', categoria: 'Tecnologia', localizacao: 'Rio de Janeiro', imagem: 'url_da_imagem2' },
  // Adicione mais fornecedores de exemplo
];

const ListagemFornecedores = () => {
  const [fornecedores, setFornecedores] = useState(fornecedoresMock);
  const [filtro, setFiltro] = useState('');

  const renderFornecedor = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Image source={{ uri: item.imagem }} style={{ width: 50, height: 50 }} />
      <Text>Nome: {item.nome}</Text>
      <Text>Categoria: {item.categoria}</Text>
      <Text>Localização: {item.localizacao}</Text>
    </View>
  );

  const fornecedoresFiltrados = fornecedores.filter(fornecedor => 
    fornecedor.nome.toLowerCase().includes(filtro.toLowerCase()) || 
    fornecedor.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        style={{ borderBottomWidth: 1, marginBottom: 10 }} 
        value={filtro} 
        onChangeText={setFiltro} 
        placeholder="Pesquisar por nome ou categoria" 
      />

      <FlatList 
        data={fornecedoresFiltrados} 
        renderItem={renderFornecedor} 
        keyExtractor={item => item.id} 
      />
    </View>
  );
};

export default ListagemFornecedores;
