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
----  Contact:       <marcio.bajunior@professores.estacio.br>.
----  Place:         S&atilde;o Paulo, Brasil.
----  Copyright (c): 2024.
----  License:       [LICENSE_NAME].
----
----  [LICENSE_SHORT_TEXT].
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
# README para o c&oacute;digo de LLM Tester

> A GenAI service testing mobile application based on React Native. 

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

**1) INTRODU&ccedil;ÃO**

**2) REACT NATIVE**

**3) REQUISITOS E PRINCIPAIS COMPONENTES**

&nbsp;&nbsp;**3.1) CACHING E PERSIST&Ecirc;NCIA**

&nbsp;&nbsp;&nbsp;&nbsp;**3.1.1) LOCALMENTE**

&nbsp;&nbsp;&nbsp;&nbsp;**3.1.2) REMOTAMENTE**

**4) ESTRUTURA DO PROJETO LLM TESTER**

&nbsp;&nbsp;**4.1) O DIRET&Oacute;RIO /ASSETS/**

&nbsp;&nbsp;**4.2) O DIRET&Oacute;RIO /COMPONENTS/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.2.1) O FICHEIRO /COMPONENTS/STYLES.JS**

&nbsp;&nbsp;**4.3) O DIRET&Oacute;RIO /.PERSISTENCE/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV**

**5) OBSERVA&Ccedil;&Otilde;ES**

**REFER&Ecirc;NCIAS**



<!--
----------------------------------------------------------------------
--------  INTRODU&ccedil;ÃO
--------
----------------------------------------------------------------------
-->
## 1) INTRODU&ccedil;ÃO

Vislumbres do primeiro quarto do século XXI revelam claras tend&ecirc;ncias tecnol&oacute;gicas, e novas preocupações acompanham as referidas tend&ecirc;ncias. O LLM Tester é uma aplicação para computadores móveis e portáteis capaz de testar serviços de inteligência artificial gerativa ou generativa, i.e., serviços LLM.

### PROJETO LLM TESTER

### A DISCIPLINA ARA0089

A disciplina "ARA0089 Programa&ccedil;ão para dispositivos m&oacute;veis em Android" é ministrada em formato sala de aula invertida, conforme determina a sua ementa.

As turmas da disciplina foram divididas em equipes de cinco alunos no máximo, lideranças foram definidas, e a partir de então, as referidas equipes passaram a trabalhar no desenvolvimento de uma aplica&ccedil;ão que atendesse aos requisitos funcionais e não-funcionais m&iacute;nimos do enunciado.

Uma vez que a ementa determina a utiliza&ccedil;ão do arcabou&ccedil;o React Native, a principal linguagem de programa&ccedil;ão utilizada é a JavaScript, juntamente à extensão JavaScript Syntax eXtension (JSX), que agrega a sintaxe XML à referida linguagem de programa&ccedil;ão.

#### CODING DOJO

O professor utiliza o laborat&oacute;rio para orientar as equipes, e para produzir intera&ccedil;ões entre elas. Assim, algumas aulas ocorrem como o chamado "coding dojo", um modelo de programa&ccedil;ão coletiva no qual o c&oacute;digo é projetado para que todos os presentes possam auxiliar em sua depura&ccedil;ão e/ou em seu aprimoramento.

A engenharia de software do projeto lan&ccedil;a mão do not&oacute;rio arcabou&ccedil;o Scrum, que por sua vez compõe o conjunto de sistemáticas chamado "desenvolvimento ágil de software".

### A APLICA&ccedil;ÃO

A aplica&ccedil;ão está dispon&iacute;vel para Android e iOS.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 2) REACT NATIVE

Arcabou&ccedil;o mantido pela organiza&ccedil;ão chamada Meta, que permite a cria&ccedil;ão de aplicativos para Android e iOS a partir de uma base única, escrita predominantemente em JavaScript e JSX.

O projeto utiliza uma implementa&ccedil;ão do React Native chamada Snack.


### DEPENDÊNCIAS

A presente se&ccedil;ão trata das dependências listadas pelo ficheiro package.json. 


### TECNOLOGIAS E TÉCNICAS HABILITADORAS

#### JAVASCRIPT

#### JSX

#### JSON

#### XML

#### SCRUM

### A INTERFACE SNACK

Utiliza-se o IDE Expo Snack para prototipagem. Ele permite que o resultado do código seja automaticamente mostrado no painel à direita, que funciona como se fosse a tela de um dispositivo móvel. É possível emular equipamentos com Android e com iOS. Caso seja desejável visualizar telas em smartphones reais e/ou outros dispositivos, utiliza-se o código QR.

Não se esqueça de salvar as suas edições caso escolha usar o Expo Snack. Elas nem sempre são salvas automaticamente.

O URL de um Snack pode ser compartilhado para que outras pessoas vejam o projeto facilmente. Note que todos os projetos criados no Snack são acessíveis publicamente através do URL do projeto, e.g., o Projeto RH em A&ccedil;ão [1]. Isso é bem útil para mostrar o c&oacute;digo a alguém, e facilita bastante a vida do professor.

O pr&oacute;prio Snack tem o seu c&oacute;digo aberto, dispon&iacute;vel em seu [reposit&oacute;rio do GitHub](https://github.com/expo/snack).

Caso queira testar ou mostrar o aplicativo em funcionamento num dispositivo m&oacute;vel de verdade, use o *QR code* disponível em "*My Device*", que fica sobre a telinha do dispositivo virtual.

Caso você já tenha um editor de texto ou IDE de sua preferência, fa&ccedil;a o *download* do seu projeto, e use o [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

Adicionalmente, o Expo oferece um [f&oacute;rum](https://forums.expo.dev/c/expo-dev-tools/61) para dúvidas gerais e específicas. 

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 3) REQUISITOS E PRINCIPAIS COMPONENTES

A biblioteca react-native-fs figura como uma op&ccedil;ão para a cria&ccedil;ão de ficheiros, entretanto se mostrou problemática no IDE Snack.

### 3.1) CACHING E PERSIST&Ecirc;NCIA

Dados da aplica&ccedil;ão são salvos localmente e remotamente. Eles são organizados em três tipos de tabelas: um tipo para tabelas de contas, um tipo para tabelas de consultas, e um tipo para tabelas de registros ou *logs*.

Tabelas de registros ou *logs* servem para auxíliar a pr&oacute;pria atividade do desenvolvimento da aplica&ccedil;&atilde;o.

#### 3.1.1) LOCALMENTE

O armazenamento local de dados depende da plataforma.

Caso a plataforma seja Android ou iOS, o armazenamento local pode utilizar os componentes AsyncStorage e Cache, que amenizam problemas do usuário nas situa&ccedil;ões em que as consultas a bancos de dados remotos forem imposs&iacute;veis. Isso significa que o Cache melhora a experiência do usuário. O referido componente copia para o sistema operacional local alguns dados que normalmente exigiriam consultas a servi&ccedil;os remotos.

#### 3.1.2) REMOTAMENTE

Dada a urgência de uso, a implementa&ccedil;ão padrão irá provisoriamente utilizar planilhas _online_ como bancos de dados.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 4) ESTRUTURA DO PROJETO LLM TESTER

Diret&oacute;rios e ficheiros com c&oacute;digos-fontes. O ficheiro principal é o App.js.

### 4.1) O DIRET&Oacute;RIO /ASSETS/

Abriga conteúdo visual e audiovisual.

### 4.2) O DIRET&Oacute;RIO /COMPONENTS/

Abriga os ficheiros locais de biblioteca, chamados de componentes.

### 4.2.1) O FICHEIRO /COMPONENTS/STYLES.JS

Os estilos ficam concentrados no ficheiro /components/Styles.js.

### 4.3) O DIRET&Oacute;RIO /.PERSISTENCE/

Abriga dados, e.g., etc.

### 4.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV

Persiste registros.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 5) OBSERVA&Ccedil;&Otilde;ES

Quanto à viabilidade da utiliza&ccedil;ão de planilhas _online_ como bancos de dados para situa&ccedil;ões urgentes.

<!--
----------------------------------------------------------------------
--------  REFERÊNCIAS
--------
----------------------------------------------------------------------
-->
## REFER&Ecirc;NCIAS 

[1] BARBADO JUNIOR, Marcio et al. LLM Tester. 2024. 650 Industries. Dispon&iacute;vel em: <https://snack.expo.dev/@marcio.barbado/llm-tester>, acessado em 29 de Setembro de 2024. 
