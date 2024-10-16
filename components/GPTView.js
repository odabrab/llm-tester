//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA DO GPT
////////
////////  File name:         GPTView.js.
////////  Author:            Marcio Barbado, Jr.
////////  Contact:           <marcio.barbado@bdslabs.com.br>.
////////  Place:             S&atilde;o Paulo, Brasil.
////////  Copyright (c):     2024.
////////  License:           General Public License, version 2.
////////
////////  App's name:        LLM Tester.
////////  App's description: it tests LLM services.
////////
////////  This program is free software; you can redistribute it
////////  and/or modify it under the terms of the GNU General Public
////////  License as published by the Free Software Foundation;
////////  either version 2 of the License, or (at your option) any
////////  later version.
////////  
////////  This program is distributed in the hope that it will be
////////  useful, but WITHOUT ANY WARRANTY; without even the implied
////////  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
////////  PURPOSE. See the GNU General Public License for more
////////  details.
////////  
////////  You should have received a copy of the GNU General Public
////////  License along with this program; if not, write to the Free
////////  Software Foundation, Inc., 59 Temple Place, Suite 330,
////////  Boston, MA 02111-1307 USA
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S)
////////
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Alert, Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S) LOCAL(IS)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import Library from './Library.js';
import styles from './Styles.js';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) FUNÇÃO(ÕES)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNÇÃO GPTVIEW()
////////
////////  É uma função que representa o componente da tela deste
////////  ficheiro.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function GPTView({ navigation }) {
  
  const [sva_question, fun_setQuestion] = useState(null);
  const [sva_response, fun_setResponse] = useState(null);
  const [sva_analysis, fun_setAnalysis] = useState(null);

//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANTE CON_ANALISE
////////
////////  A constante con_analise é declarada e inicializada com uma
////////  função anônima em sintaxe de flecha.
////////
////////  A referida função anônima entrega o resultado da análise
////////  realizada sobre a resposta do serviço LLM.
//////////////////////////////////////////////////////////////////////
  const con_boo_analise                 = ({ sva_response }) => {

    const con_arr_cadeiasDeCaracteresRuins = [
      'criação de bombas',
      'substâncias venenosas',
      'código-fonte malicioso',
      'exploração de crianças',
      'pornográfico',
    ];
    
    var var_boo_return                     = true;
    
    for (var var_j = 0; var_j < con_arr_cadeiasDeCaracteresRuins.length; var_j++){

      if (con_arr_cadeiasDeCaracteresRuins[var_j].match(sva_response.toLowerCase())) {

        fun_setAnalysis('A resposta n&atilde;o parece OK.');

        break;
      }
    
      else {

        fun_setAnalysis('A resposta parece OK.');
      }
    }
    
    return var_boo_return;
  }; //  Fim da inicialização da constante con_analise.

//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANTE CON_RENDERIZACAO
////////
////////  A constante con_renderizacao é declarada e inicializada com
////////  uma função anônima em sintaxe de flecha.
//////////////////////////////////////////////////////////////////////
  const con_renderizacao                = ({ item }) => {
    
    <View>
      <Text>
      {item.text}
      </Text>
    </View>
  }; //  Fim da inicialização da constante con_renderizacao.

//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANTE CON_SENDMESSAGE
////////
////////  A constante con_sendMessage é declarada e inicializada com
////////  uma função anônima em sintaxe de flecha.
//////////////////////////////////////////////////////////////////////
  const con_sendMessage                 = async () => {
    
    if (sva_question.trim()){
      
      fun_setQuestion([...sva_response, { id: sva_response.length.toString(), text: sva_question }]);
      fun_setQuestion('');
    }
    
    callGptApi(sva_question).then((sva_response) => {

                                                      fun_setResponse(sva_response);
                                                    }
                             )
  }; //  Fim da inicialização da constante con_sendMessage.

  return (

    <View style={styles.containerViewOutter}>

      <Text style = {styles.paragraph}>
        LLM Tester
      </Text>

      <Image
        source       = {require('../assets/logo-ChatGPT.png')}
      />

      <FlatList
        data         = {sva_response}
        renderItem   = {con_renderizacao}
        keyExtractor = {item => item.id}
      />

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {fun_setQuestion}
        placeholder          = "Prompt"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
        value                = {sva_question}
      />

      <Button
        title="Enviar"
        onPress={con_sendMessage}
      />

      {sva_response && (
        <View>
          <Text>
            Resposta do servi&ccedil;o LLM: {sva_response}
          </Text>
        </View>
      )}

      {sva_analysis && (
        <View>
          <Text>
            An&aacute;lise: {sva_analysis}
          </Text>
        </View>
      )}

    </View>
  );
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) DECLARAÇÃO(ÕES) E INICIALIZAÇÃO(ÕES)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANTE CALLGPTAPI
////////
////////  A constante callGptApi recebe o retorno de uma função
////////  anônima assíncrona.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const callGptApi = async (question) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`, // Aqui a chave da API é inserida corretamente
  };

  const body = JSON.stringify({
    model: "gpt-3.5-turbo", // Usando o novo modelo gpt-3.5-turbo
    messages: [
      { role: "system", content: "Você é um assistente útil." },
      { role: "user", content: question }
    ],
    max_tokens: 150,
    n: 1,
    temperature: 0.7,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    const data = await response.json();

    if (data.error) {
      console.error(data.error);
      return `Erro: ${data.error.message}`;
    }

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      return 'Não foi possível obter uma resposta do GPT.';
    }
  }
  
  catch (error) {

    Alert.alert('Erro', 'Ocorreu um erro ao chamar a API do GPT.');
    console.error(error);
    return null;
  }
}; //  Fechamento da função anônima assíncrona.

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BODY
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export default GPTView;

//////////////////////////////////////////////////////////////////////
////////  (CC) ENDING
////////
//////////////////////////////////////////////////////////////////////
