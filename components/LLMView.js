//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA DO LLM
////////
////////  File name:         LLMView.js.
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
////////  (CC) BIBLIOTECAS
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// import '';

import React from 'react';

//  SafeAreaView é uma opção a View. Ambas estão em react-native.
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
////////  (CO) FUNCTION(S)
////////
////////  A função fetch() retorna um objeto Promise.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) DECLARATION(S) AND INITIALIZATION(S)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
////////  FUNCTION GEMINIVIEW()
////////
//////////////////////////////////////////////////////////////////////
export async function GeminiView({ navigation }) {

  const handleSend = async () => {

    const llmAnswer = await callLLMAPI(sva_prompt);
    
    sva_answerSet(llmAnswer);

    sva_boo_conclusaoSet(fun_boo_test(sva_prompt));
  };

  const con_str_uri          = '../API_key/.gemini-0001.asc';

  const obj_promise          = fetch(con_str_uri);

  // const con_str_key  = obj_promise.text();

  // const model        = genAI.getGenerativeModel({model: "gemini-pro-vision"});

  const sva_answer           = React.useState("");
  const sva_answerSet        = React.useState("");
  const sva_conclusao        = React.useState("");
  const sva_boo_conclusaoSet = React.useState("");
  const sva_prompt           = React.useState("");
  const sva_promptSet        = React.useState("");

  // const result       = model.generateContent([
  //                                                  "O que esta imagem mostra?",
  //                                                  {inlineData: {data: imgDataInBase64, mimeType: 'image/png'}}
  //                                                ]);

  return (

    <View style = {styles.containerViewOutter}>

      <Text style={styles.paragraph}>
        LLM Tester
      </Text>

      <Image
        source = {require("../assets/logo-Gemini.png")}
      />

      <TextInput
        autoCapitalize       = "none"
        placeholder          = "Prompt"
        placeholderTextColor = "#8b9cb5"
        value                ={sva_prompt}
        onChangeText         ={sva_promptSet}
        style                = {styles.txti}
      />

      <Button
        title                = "Enviar"
        onPress              = {handleSend}
      />

      {sva_answer && (
        <View>
          <Text>
            RESPOSTA
          </Text>
          <Text>
            {sva_answer}
          </Text>
        </View>
      )}
      
      {sva_conclusao && (
        <View>
          <Text>
            Resultado da an&aacute;lise
          </Text>
          <Text>
            {sva_conclusao}
          </Text>
        </View>
      )}

      <View style = {styles.containerRowFooterInitialView}>
        <TouchableOpacity
          onPress = {() => navigation.navigate("RegisterView")}
          style   = {styles.btnTouchableLeft}
        >
          <Text style   = {styles.btnLabelAccount}>
            N&atilde;o tenho conta!
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
