<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----  FICHEIRO README FORMATADO EM MARKDOWN
----
----  File name:     README.md.
----  Author:        Marcio Barbado, Jr.
----  Contact:       <marcio.barbado@bdslabs.com.br>.
----  Place:         S&atilde;o Paulo, Brasil.
----  Copyright (c): 2024, and 2025.
----  License:       [LICENSE_NAME].
----
----  [LICENSE_SHORT_TEXT].
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
# README for the LLM Tester source code

> A GenAI service testing mobile application based on React Native. 

Parts of this project result from efforts of students and their
teacher, on a Brazilian university named Est&aacute;cio.

In order to have a quick peek on it working, check [1]. That is where the classroom prototype is kept, a public web IDE implementing the React Native framework. It's known as the Expo Snack web IDE.

Version control is done with Git, which enforces a distributed
strategy for source code repositories. The first public repository to
receive this project's commits is avaialable on the GitHub service,
precisely on [2].

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  SUM&Aacute;RIO
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## SUM&Aacute;RIO

**1) INTRODUCTION**

&nbsp;&nbsp;**1.1) PROTOTYPING AN LLM SERVICE TESTER**

&nbsp;&nbsp;&nbsp;&nbsp;**1.1.1) REQUISITOS**

&nbsp;&nbsp;&nbsp;&nbsp;**1.1.2) JAVASCRIPT**

&nbsp;&nbsp;&nbsp;&nbsp;**1.1.3) REACT NATIVE**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1.1.3.1) DEPEND&Ecirc;NCIAS**

**2) ESTRUTURA DO PROJETO LLM TESTER**

&nbsp;&nbsp;**2.1) O DIRET&Oacute;RIO /ASSETS/**

&nbsp;&nbsp;**2.2) O DIRET&Oacute;RIO /COMPONENTS/**

&nbsp;&nbsp;&nbsp;&nbsp;**2.2.1) O FICHEIRO /COMPONENTS/STYLES.JS**

&nbsp;&nbsp;**2.3) O DIRET&Oacute;RIO /.PERSISTENCE/**

&nbsp;&nbsp;&nbsp;&nbsp;**2.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV**

&nbsp;&nbsp;**2.4) O FICHEIRO APP.JS**

&nbsp;&nbsp;**2.5) O FICHEIRO PACKAGE.JSON**

**3) ARQUITETURA**

&nbsp;&nbsp;**3.1) PRINCIPAIS COMPONENTES**

&nbsp;&nbsp;**3.2) CACHING E PERSIST&Ecirc;NCIA**

&nbsp;&nbsp;&nbsp;&nbsp;**3.2.1) LOCALMENTE**

&nbsp;&nbsp;&nbsp;&nbsp;**3.2.2) REMOTAMENTE**

**4) LLM**

&nbsp;&nbsp;**4.1) GEMINI**

&nbsp;&nbsp;**4.2) GPT**

&nbsp;&nbsp;**4.3) LLAMA**

**5) OBSERVA&Ccedil;&Otilde;ES**

**REFER&Ecirc;NCIAS**

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  INTRODUCTION
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## 1) INTRODUCTION

A glimpse on the first quarter of the 21st century tech reveal some trends and concerns, e.g., artificial intelligence services and its consequences for mankind. The extent to which LLM services comply with laws has been the subject of debate in many jurisdictions around the globe. Following the referred concerns, the prototype herein approaches them by means of a distributed mobile application. These proof-of-concept routines are the result of a graduation discipline, namely ARA0089, taught at the Est&aacute;cio university in S&atildeo Paulo, Brasil.

### 1.1) PROTOTYPING AN LLM SERVICE TESTER

As turmas est&atilde;o a trabalhar em prot&oacute;tipos aplicações m&oacute;veis capazes de testar serviços LLM. Todas as aplicações s&atilde;o construídas com a linguagem de programaç&atilde;o JavaScript e o arcabouço React Native, o que permite disponibilizar as aplicações para Android e iOS.

A presente seç&atilde;o trata das tecnologias e técnicas inicialmente selecionadas para a prototipagem.

#### 1.1.1) REQUISITOS

A presente seç&atilde;o mostra os requisitos da aplicaç&atilde;o.

#### 1.1.2) JAVASCRIPT

#### 1.1.3) REACT NATIVE

Arcabou&ccedil;o mantido pela organiza&ccedil;&atilde;o chamada Meta, que permite a cria&ccedil;&atilde;o de aplicativos para Android e iOS a partir de uma base única, escrita predominantemente em JavaScript e JSX.

O projeto utiliza uma implementa&ccedil;&atilde;o do React Native chamada Snack.

##### 1.1.3.1) DEPEND&Ecirc;NCIAS

A presente se&ccedil;&atilde;o trata das dependências listadas pelo ficheiro package.json.

#### JSX

#### JSON

#### XML

#### SCRUM

### A INTERFACE SNACK

Utiliza-se o IDE Expo Snack para prototipagem. Ele permite que o resultado do c&oacute;digo seja automaticamente mostrado no painel à direita, que funciona como se fosse a tela de um dispositivo m&oacute;vel. É possível emular equipamentos com Android e com iOS. Caso seja desejável visualizar telas em smartphones reais e/ou outros dispositivos, utiliza-se o c&oacute;digo QR.

N&atilde;o se esqueça de salvar as suas edições caso escolha usar o Expo Snack. Elas nem sempre s&atilde;o salvas automaticamente.

O URL de um Snack pode ser compartilhado para que outras pessoas vejam o projeto facilmente. Note que todos os projetos criados no Snack s&atilde;o acessíveis publicamente através do URL do projeto, e.g., o Projeto RH em A&ccedil;&atilde;o [1]. Isso é bem útil para mostrar o c&oacute;digo a alguém, e facilita bastante a vida do professor.

O pr&oacute;prio Snack tem o seu c&oacute;digo aberto, dispon&iacute;vel em seu [reposit&oacute;rio do GitHub](https://github.com/expo/snack).

Caso queira testar ou mostrar o aplicativo em funcionamento num dispositivo m&oacute;vel de verdade, use o *QR code* disponível em "*My Device*", que fica sobre a telinha do dispositivo virtual.

Caso você já tenha um editor de texto ou IDE de sua preferência, fa&ccedil;a o *download* do seu projeto, e use o [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

Adicionalmente, o Expo oferece um [f&oacute;rum](https://forums.expo.dev/c/expo-dev-tools/61) para dúvidas gerais e específicas. 

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  ESTRUTURA DO PROJETO LLM TESTER
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## 2) ESTRUTURA DO PROJETO LLM TESTER

Diret&oacute;rios e ficheiros com c&oacute;digos-fontes. O ficheiro principal é o App.js. Caso o projeto esteja no Snack, o ficheiro package.json possui particular import&acirc;ncia.

### 2.1) O DIRET&Oacute;RIO /ASSETS/

Abriga conteúdo visual e audiovisual.

### 2.2) O DIRET&Oacute;RIO /COMPONENTS/

Abriga os ficheiros locais de biblioteca, chamados de componentes.

### 2.2.1) O FICHEIRO /COMPONENTS/STYLES.JS

Os estilos ficam concentrados no ficheiro /components/Styles.js.

### 2.3) O DIRET&Oacute;RIO /.PERSISTENCE/

Abriga dados, e.g., etc.

### 2.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV

Persiste registros.

### 2.4) O FICHEIRO APP.JS

### 2.5) O FICHEIRO PACKAGE.JSON
Ficheiro de fundamental importância no IDE Snack. Realiza o gerenciamento de bibliotecas e suas versões.

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  ARQUITETURA
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## 3) ARQUITETURA

### 3.1) PRINCIPAIS COMPONENTES

O prot&oacute;tipo para o arcabouço React Native se encontra adaptado às restrições do IDE web chamado Expo Snack.

A biblioteca react-native-fs figura como uma op&ccedil;&atilde;o para a cria&ccedil;&atilde;o de ficheiros, entretanto se mostrou problemática no IDE Snack.

### 3.2) CACHING E PERSIST&Ecirc;NCIA

Dados da aplica&ccedil;&atilde;o s&atilde;o salvos localmente e remotamente. Eles s&atilde;o organizados em três tipos de tabelas: um tipo para tabelas de contas, um tipo para tabelas de consultas, e um tipo para tabelas de registros ou *logs*.

Tabelas de registros ou *logs* servem para auxíliar a pr&oacute;pria atividade do desenvolvimento da aplica&ccedil;&atilde;o.

#### 3.2.1) LOCALMENTE

O armazenamento local de dados depende da plataforma.

Caso a plataforma seja Android ou iOS, o armazenamento local pode utilizar os componentes AsyncStorage e Cache, que amenizam problemas do usuário nas situa&ccedil;ões em que as consultas a bancos de dados remotos forem imposs&iacute;veis. Isso significa que o Cache melhora a experiência do usuário. O referido componente copia para o sistema operacional local alguns dados que normalmente exigiriam consultas a servi&ccedil;os remotos.

#### 3.2.2) REMOTAMENTE

Dada a urgência de uso, a implementa&ccedil;&atilde;o padr&atilde;o pode provisoriamente utilizar planilhas _online_ como bancos de dados. Os estudantes entretanto têm demonstrado alguma preferência pelo serviço Firebase [6].

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  LLM
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## 4) LLM

### 4.1) GEMINI

Uma vez autenticada a conta Google, deve-se verificar [3] e [4]. Cotas de utilização podem ser configuradas em [5].

### 4.2) GPT

### 4.3) LLAMA

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  OBSERVA&Ccedil;&Otilde;ES
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## 5) OBSERVA&Ccedil;&Otilde;ES

Quanto à viabilidade da utiliza&ccedil;&atilde;o de planilhas _online_ como bancos de dados para situa&ccedil;ões urgentes.

<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
--------  REFER&Ecirc;NCIAS 
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
## REFER&Ecirc;NCIAS 

[1] BARBADO JUNIOR, Marcio et al. LLM Tester prototype. 2024. 650 Industries. Dispon&iacute;vel em: <https://snack.expo.dev/@marcio.barbado/llm-tester-poc>, acessado em 30 de Setembro de 2024. 

[2] BARBADO JUNIOR, Marcio et al. LLM Tester. 2024. GitHub. Dispon&iacute;vel em: <https://github.com/odabrab/llm-tester>, acessado em 30 de Setembro de 2024. 

[3] Google. Google AI Studio. 2024. Dispon&iacute;vel em: <https://makersuite.google.com/>, acessado em 20 de Outubro de 2024.

[4] Google. Get API key. 2024. Dispon&iacute;vel em: <https://aistudio.google.com/apikey>, acessado em 23 de Outubro de 2024.

[5] Google. Quotas & system limits. 2024. Dispon&iacute;vel em: <https://console.cloud.google.com/iam-admin/quotas>, acessado em 24 de Outubro de 2024.

[6] Google. Firebase. 2024. Dispon&iacute;vel em: <https://firebase.google.com/>, acessado em 24 de Outubro de 2024.
