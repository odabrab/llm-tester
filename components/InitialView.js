//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA INICIAL
////////
////////  File name:         InitialView.js.
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
////////  (CC) BIBLIOTECAS
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React from 'react';

//  SafeAreaView é uma opção a View. Ambas estão em react-native.
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { WebView } from 'react-native-webview';

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
////////  (CO) FUNCTION(S)
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) DECLARATION(S) AND INITIALIZATION(S)
////////
////////  Declarações e inicializações de constantes e variáveis.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
////////  FUNCTION INITIALVIEW()
////////
////////  TouchableOpacity é um exemplo de controle.
////////
////////  Card é um exemplo de controle.
//////////////////////////////////////////////////////////////////////
export default function InitialView({ navigation }) {

  const onChangeText = React.useState("");

  return (

    <View>

      <View style = {styles.containerRow}>

        <Image
          source = {require("../assets/logotipo-Estacio-02.png")}
          style  = {styles.logoEstacio}
        />

        <Text style={styles.paragraph}>
          Est&aacute;cio
        </Text>

      </View>

      <Text style={styles.paragraph}>
        LLM Tester
      </Text>

      <View style = {styles.btnLLM}>

        <Button
          onPress              = {() => navigation.navigate("GeminiView")}
          title                = "Gemini"
        />

        <Button
          onPress              = {() => navigation.navigate("GPTView")}
          title                = "GPT"
        />

        <Button
          onPress              = {() => navigation.navigate("LlamaView")}
          title                = "Llama"
        />

        <Button
          onPress              = {() => navigation.navigate("LLMView")}
          title                = "LLM"
        />

      </View>

      <View style = {styles.containerRowFooterInitialView}>
        <TouchableOpacity
          onPress = {() => navigation.navigate("RegisterView")}
          style   = {styles.btnTouchableLeft}
        >
          <Text style   = {styles.btnLabelAccount}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
