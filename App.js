//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  APPLICATION'S MAIN FILE
////////
////////  File name:         App.js.
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
////////  (CO) UTILIZAÇÃO
////////    (CO) BIBLIOTECAS
////////      (CC) BIBLIOTECAS REACT NAVIGATION
////////      (CC) BIBLIOTECAS LOCAIS
////////    (CO) FUNCTION(S)
////////      (CC) FUNCTION FUNCTIONEXAMPLE()
////////    (CO) DECLARATION(S) AND INITIALIZATION(S)
////////      (CC) CONSTANT STACK
////////    (CO) BODY
////////      (CC) MAIN FUNCTION
////////        (CC) ENDING
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
////////  A presente seção é como um manual.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) BIBLIOTECAS
////////
////////  Quanto à importação de componentes das bibliotecas ou
////////  módulos npm, típicos do desenvolvimento em React Native,
////////  suponha que você precise de um componente chamado
////////  BibliotecaSuper, e em algum tutorial por aí, alguém diga
////////  que a obtenção do referido componente exige que se execute
////////  um comando npm parecido com:
////////
////////  npm install @react-modulozinho/maroto
////////
////////  No Snack, tudo o que você realmente precisa fazer é algo
////////  como:
////////
////////  import {BibliotecaSuper} from "@react-modulozinho/maroto";
////////
////////  A sintaxe com import passou a ser possível a partir da
////////  versão 6 da ECMAScript.
////////
////////  As versões das bibliotecas são definidas no ficheiro
////////  package.json, e é nesse ficheiro que são resolvidos os
////////  conflitos de versões.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECAS REACT NAVIGATION
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  O módulo expo-dev-client deve ser usado apenas fora de produção.
//
//  Requer configuração específica em app.json.
import * as DevClient from 'expo-dev-client';

//  Importar NavigationContainer da biblioteca
//  @react-navigation/native.
import { NavigationContainer } from '@react-navigation/native';

//  Importar a função createNativeStackNavigator() da biblioteca
//  @react-navigation/native-stack.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S) LOCAL(IS)
////////
////////  Importar bibliotecas locais, que são componentes presentes
////////  no próprio Snack. A biblioteca importada deve usar
////////  export default.
////////
////////  Qualquer biblioteca/componente correspondente a uma tela
////////  deve importar os estilos presentes no ficheiro chamado
////////  Styles.js, que por sua vez também é uma biblioteca.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import AccountView from './components/AccountView.js';
import AuthenticationView from './components/AuthenticationView.js';
import GeminiView from './components/GeminiView.js';
import GPTView from './components/GPTView.js';
import InitialView from './components/InitialView.js';
import LlamaView from './components/LlamaView.js';
import LLMView from './components/LLMView.js';
import PersistLibrary from './components/PersistLibrary.js';
import RegisterView from './components/RegisterView.js';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) FUNCTION(S)
////////
////////  As próximas seções podem apresentar funções auxiliares caso
////////  isso seja necessário.
////////
////////  Um exemplo seria colocar as funções correspondentes às
////////  telas aqui.
////////
////////  Salienta-se que a função principal é o corpo do código deste
////////  ficheiro. Portanto, ele não é uma rotina auxiliar, e não
////////  deve ser colocada aqui.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION FUNEXAMPLE()
////////
////////  PARÂMETROS
////////
////////  @param {Boolean} varParBooA
////////
////////  @param {Int} varParIntB
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function funExample(varParBooA, varParNumB) {

  var varBooA   = varParBooA;
  var varNumB   = varParNumB;
  var varNumRet = 0;

  return varNumRet;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION APP()
////////
////////  A função App() é a rotina principal da aplicação.
////////
////////  Aqui estruturamos a pilha de telas.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'screen'}
        id="id_stack_navigator"
        initialRouteName="InitialView"
        options={{ title: 'LLM Tester' }}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'yellow',
            borderBottomWidth: 1,
            elevation: 1, // Android shadow.
            shadowOpacity: 1, // iOS shadow.
          },
          headerTintColor: 'purple',
        }}>
        <Stack.Screen
          component={InitialView}
          name="InitialView"
          options={{
            title: 'Initial View',
          }}
        />

        <Stack.Screen
          component={AccountView}
          name="AccountView"
          options={{
            title: 'Account View',
          }}
        />

        <Stack.Screen
          component={GeminiView}
          name="GeminiView"
          options={{
            title: 'Gemini View',
          }}
        />

        <Stack.Screen
          component={GPTView}
          name="GPTView"
          options={{
            title: 'GPT View',
          }}
        />

        <Stack.Screen
          component={LlamaView}
          name="LlamaView"
          options={{
            title: 'Llama View',
          }}
        />

        <Stack.Screen
          component={LLMView}
          name="LLMView"
          options={{
            title: 'LLM View',
          }}
        />

        <Stack.Screen
          component={RegisterView}
          name="RegisterView"
          options={{
            title: 'Register View',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANT STACK
////////
////////  Constante criada para abrigar o navegador de telas
////////  empilhadas.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) BODY
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export default App();

//////////////////////////////////////////////////////////////////////
////////  (CC) ENDING
////////
//////////////////////////////////////////////////////////////////////

// throw "Forcing artificial end.";
