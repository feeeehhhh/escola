import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Atividade2 = () => {
    const [text, setText] = useState('');

    return (
    <View style={styles.container}>
        <Text style={styles.h1}>
            Atividade2
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva Aqui"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <View>
        <Text style={styles.text}>
        {text
          .split(' ')
          .map(word => word && '😀')
          .join(' ')}
      </Text>
    </View>
    </View>
    
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 50,
    },
    container: {
        flex: 1, // Preenche a tela inteira
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        paddingHorizontal: 10, // Garante padding horizontal

    },
    input: {
        height: 40,
        borderColor: 'gray', // Adiciona uma borda ao input
        borderWidth: 1, // Define a largura da borda
        padding: 10,
        borderRadius: 20,
    },

});

export default Atividade2;