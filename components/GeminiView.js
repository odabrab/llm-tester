//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA DO GEMINI
////////
////////  File name:         GeminiView.js.
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
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  ESTRUTURA DO CONTEÚDO DESTE FICHEIRO
////////
////////  Representa-se abaixo a estrutura deste ficheiro. O sufixo
////////  (CC) denota um trecho com comentários e código, e o sufixo
////////  (CO) denota um trecho com comentários apenas. Pense nisto
////////  como um sumário.
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) UTILIZAÇÃO
////////
////////  O presente componente permite interação multimodal com o LLM
////////  Gemini, i.e., pode-se enviar textos e imagens, e receber
////////  respostas em texto.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S)
////////
////////  O módulo fs permite trabalhar com o sistema de arquivos
////////  local sob o ponto de vista da aplicação.
////////
////////  O módulo @google/generative-ai pressupõe a utilização de um
////////  ambiente Node.js.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import 'fs';

import { useState } from 'react';

//  SafeAreaView é uma opção a View. Ambas estão em react-native.
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//  GoogleGenerativeAI.
import '@google/generative-ai';

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
////////  (CC) FUNÇÃO FILETOGENERATIVEPART()
////////
////////  Converter informações do sistema de arquivos local em um
////////  objeto GoogleGenerativeAI.Part.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function fileToGenerativePart(path, mimeType) {

  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString('base64'),
      mimeType,
    },
  };
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  FUNÇÃO GEMINIVIEW()
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
export default function GeminiView({ navigation }) {

  const [sva_prompt, fun_setPrompt]     = useState(null);
  const [sva_response, fun_setResponse] = useState(null);
  const [sva_analysis, fun_setAnalysis] = useState(null);

  return (

    <View style={styles.containerViewOutter}>
    
      <Text style={styles.paragraph}>
        LLM Tester
      </Text>

      <Image
        source = {require('../assets/logo-Gemini.png')}
      />

      <TextInput
        autoCapitalize       = "none"
        placeholder          = "Prompt"
        placeholderTextColor = "#8b9cb5"
        value                = {sva_prompt}
        onChangeText         = {fun_setPrompt}
        style                = {styles.txti}
      />

      <Button
        title                = "Enviar"
        onPress              = {handleSend}
      />

      {sva_response && (
        <View>
          <Text>
            RESPOSTA
          </Text>
          <Text>
            {sva_response}
          </Text>
        </View>
      )}

      {sva_analysis && (
        <View>
          <Text>
            AN&Aacute;LISE
          </Text>
          <Text>
            {sva_analysis}
          </Text>
        </View>
      )}

      <View style={styles.containerRowFooterInitialView}>

        <TouchableOpacity

          onPress={() => navigation.navigate('RegisterView')}
          style={styles.btnTouchableLeft}>
          <Text style={styles.btnLabelAccount}>
            CRIAR CONTA
          </Text>

        </TouchableOpacity>

      </View>
    </View>
  );
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNÇÃO HANDLESEND()
////////
////////  Sintaxe arrow.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const handleSend = async () => {

  const llmAnswer = await run(sva_prompt);

  setAnswer(llmAnswer);

  sva_boo_conclusaoSet(fun_boo_test(sva_prompt));
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNÇÃO RUN()
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
async function run(var_par_str_prompt) {

//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANT MODEL
////////
////////  Declarar e inicializar a constante model com uma versão de
////////  modelo generativo.
////////
////////  Exemplos de alguns modelos generativos do Google:
////////
////////  * gemini-1.5-flash;
////////    modelo dito multimodal que recebe áudio, imagem,
////////    audiovisual e texto, e devolve texto;
////////
////////  * gemini-1.5-pro
////////    ; e
////////
////////  * gemini-pro-vision
////////    .
//////////////////////////////////////////////////////////////////////
  const model        = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt       = var_par_str_prompt;

  try{

    const result     = await model.generateContent(prompt);
  }

  catch(var_str_excecao){

    console.error(var_str_excecao);

    const result     = await model.streamGenerateContent(prompt);
  }

  const response     = await result.response;
  const con_str_text = response.text();

  return con_str_text;
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
////////  (CC) CONSTANT GOOGLEGENERATIVEAI
////////
////////  Declarar e inicializar a constante GoogleGenerativeAI com o
////////  módulo @google/generative-ai.
////////
////////  A constante GoogleGenerativeAI armazena uma estrutura de
////////  dados.
////////
////////  A referida estrutura de dados corresponde a uma classe com o
////////  modelo generativo do Google.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const { GoogleGenerativeAI } = require('@google/generative-ai');

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANT FS
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const fs                     = require('fs');

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANT GENAI
////////
////////  Declarar e inicializar a constante genAI com a classe
////////  GoogleGenerativeAI.
////////
////////  A constante genAI usa a chave da API para armazenar uma
////////  estrutura de dados.
////////
////////  A referida estrutura de dados corresponde a um objeto da
////////  classe GoogleGenerativeAI.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const genAI                  = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_API_KEY_GEMINI_0001);
