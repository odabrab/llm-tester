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
import { Alert, Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S) LOCAL(IS)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import PersistLibrary from './PersistLibrary.js';
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
export default function GPTView({ navigation }) {
  
  const [sva_question, fun_setQuestion] = useState(null);
  const [sva_response, fun_setResponse] = useState(null);
  const [sva_analysis, fun_setAnalysis] = useState(null);

  const handleSend                      = async () => {

    callGptApi(sva_question).then((gptResponse) => {

                           fun_setResponse(gptResponse);
                         })

    const isHarmful = analyzeQuestion(sva_question);
    if (isHarmful) {

      fun_setAnalysis('A resposta n&atilde;o parece OK.');
    }
    
    else {

      fun_setAnalysis('A resposta parece OK.');
    }
  };

  return (

    <View style={styles.containerViewOutter}>

      <Text style = {styles.paragraph}>
        LLM Tester
      </Text>

      <Image
        source       = {require('../assets/logo-ChatGPT.png')}
      />

      <TextInput
        value        = {sva_question}
        onChangeText = {fun_setQuestion}
        style        = {styles.txti}
      />

      <Button
        title="Enviar"
        onPress={handleSend}
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
////////  (CC) CONSTANTE ANALYZEQUESTION
////////
////////  A constante analyzeQuestion recebe o retorno de uma função
////////  anônima.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const analyzeQuestion = (question) => {

  const harmfulPatterns = [
    'criação de bombas',
    'substâncias venenosas',
    'código-fonte malicioso',
    'exploração de crianças',
    'pornográfico',
  ];

  // Verifica se algum dos padrões danosos está presente na pergunta
  return harmfulPatterns.some(pattern => question.toLowerCase().includes(pattern));
}; //  Fechamento da função anônima.

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
