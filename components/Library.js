//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  LIBRARY
////////
////////  File name:         Library.js.
////////  Author:            Marcio Barbado, Jr.
////////  Contact:           <marcio.barbado@bdslabs.com.br>.
////////  Place:             S&atilde;o Paulo, Brasil.
////////  Copyright (c):     2024.
////////  License:           General Public License, version 2.
////////
////////  App's name:        llm-tester.
////////  App's description: .
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
////////    (CO) BIBLIOTECA(S)
////////      (CO) FUNCTION(S)
////////        (CC) FUNÇÃO LIBRARY()
////////        (CC) FUNCTION FUNBOOCREATE()
////////        (CC) FUNCTION FUNBOOREAD()
////////        (CC) FUNCTION FUNBOOUPDATE()
////////        (CC) FUNCTION FUNBOODELETE()
////////        (CC) FUNÇÃO FUN_STR_READFILE()
////////      (CC) DECLARATION(S) AND INITIALIZATION(S)
////////      (CC) BODY
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
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) UTILIZAÇÃO
////////
////////  A presente seção é como um manual de uso da biblioteca
////////  Library.js, que deve ser importada em todo ficheiro
////////  de código-fonte a realizar operações CRUD de persistência.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) BIBLIOTECA(S)
////////
////////  Apresenta-se a seguir bibliotecas que eventualmente sejam
////////  necessárias para que esta biblioteca funcione.
////////
////////  Caso inexista conteúdo a seguir, não remova este bloco de
////////  comentário. Ele pode lhe ser útil no momento em que alguma
////////  biblioteca precisar ser incluída.
////////
////////  O módulo expo-document-picker.
////////  O módulo expo-file-system fornece FileSystem para operações
////////  CRUD locais.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

//  A biblioteca SafeAreaView é uma opção a View. Ambas estão em
//  react-native.
import { AsyncStorage } from 'react-native';

import { Cache } from 'react-native-cache';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) FUNCTION(S)
////////
////////  Funções de persistência oferecidas pela biblioteca
////////  Library.js.
////////
////////  A linguagem de programação JavaScript oferece algumas
////////  opções para se trabalhar com arquivos, ficheiros e
////////  diretórios.
////////
////////  A classe Blob é apropriada para se trabalhar com arquivos
////////  binários em contextos quaisquer desde que os referidos
////////  binários não precisem ser editados.
////////
////////  A classe File é apropriada para se trabalhar com arquivos,
////////  ficheiros e diretórios em páginas Web.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNÇÃO LIBRARY()
////////
////////  A função Library() é a rotina principal desta
////////  biblioteca. Ela abriga as funções disponíveis.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function Library() {

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION FUNBOOCREATE()
////////
////////  Creates a local or remote inode.
////////
////////  PARÂMETROS
////////
////////  @param {String} varParStrPlatform
////////
////////  @param inodeData
////////
////////  @param {Boolean} varParBooInodeLocal
////////    variável booleana que determina se o inode é local.
////////
////////  @param inodeName
////////
////////  @param {Integer} varParIntInodeType
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function funBooCreate(inodeData, inodeName, varParBooInodeLocal, varParIntInodeType, varParStrPlatform){

    varBooIsLocal  = varParBooInodeLocal;
    varStrPlatform = varParStrPlatform;

    switch (varStrPlatform){

      case "Android":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Sistema Operacional Android.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o remota.");
        }

        break;

      case "iOS":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Sistema Operacional iOS.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o remota.");
        }

        break;

      case "Web":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Web.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o local.");

          localStorage.setItem("oItem", "valorDoItem");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o remota.");
        }

        break;
      
      default:
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Plataforma desconhecida.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Cria&ccedil;&atilde;o remota.");
        }
    } // Closure of switch.

    return varBooGenericRetVal;
  }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION FUNBOOREAD()
////////
////////  Reads a local or remote inode. If the file is remote, then
////////  it behaves as a download.
////////
////////  PARÂMETROS
////////
////////  @param {String} varParStrPlatform
////////
////////  @param inodeData
////////
////////  @param {Boolean} booInodeLocal
////////
////////  @param inodeName
////////
////////  @param inodeType
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function funBooRead(inodeData, inodeName, varParBooInodeLocal, varParIntInodeType, varParStrPlatform){
  
    varBooIsLocal  = varParBooInodeLocal;
    varStrPlatform = varParStrPlatform;

    switch (varStrPlatform){

      case "Android":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Sistema Operacional Android.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura remota.");
        }

        break;

      case "iOS":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Sistema Operacional iOS.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura remota.");
        }

        break;

      case "Web":
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Web.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura local.");

          localStorage.getItem("oItem");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura remota.");
        }

        break;
      
      default:
        console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Plataforma desconhecida.");

        if (varBooIsLocal){

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura local.");
        }

        else{

          console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Leitura remota.");
        }
    } // Closure of switch.

    return varBooGenericRetVal;
  }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION FUNBOOUPDATE()
////////
////////  Atualiza um inode local ou remoto, e.g., escrever em um
////////  ficheiro de texto local ou remoto.
////////
////////  Caso o inode de interesse esteja localizado remotamente, há
////////  algumas possibilidades de se realizar a atualização.
////////
////////  Uma das possibilidades de se atualizar um inode remoto é:
////////
////////  i)  download de cópia, e criação de um inode local
////////      temporário;
////////
////////  ii) edição do inode local temporário; e por fim
////////
////////  iii) upload do inode temporário local.
////////
////////  PARÂMETROS
////////
////////  @param {String} varParStrPlatform
////////
////////  @param inodeData
////////
////////  @param {Boolean} booInodeLocal
////////
////////  @param inodeName
////////
////////  @param inodeType
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function funBooUpdate(varParStrPlatform, inodeData, booInodeLocal, strInodeName, inodeType){
    
    varData         = inodeData;
    varBooIsLocal   = booInodeLocal;
    varStrInodeName = strInodeName;
    varInodeType    = inodeType;

    if (varBooIsLocal){

      console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Atualiza&ccedil;&atilde;o local.");
      varViewGenericElement = document.createElement("varViewGenericElement");
    }

    else{

      console.log("[PROJETO RH EM A&Ccedil;&Atilde;O] Atualiza&ccedil;&atilde;o remota.");
      varInode = new Blob(varData, {type: varInodeType});
    }

    return varBooGenericRetVal;
  }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNCTION FUNBOODELETE()
////////
////////  Remove um inode local ou remoto.
////////
////////  PARÂMETROS
////////
////////  @param {String} varParStrPlatform
////////
////////  @param inodeData
////////
////////  @param {Boolean} booInodeLocal
////////
////////  @param inodeName
////////
////////  @param inodeType
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function funBooDelete(varParStrPlatform, inodeData, booInodeLocal, inodeName, inodeType){

    varBooIsLocal = booInodeLocal;

    if (varBooIsLocal){

      console.log("[PROJETO] Remo&ccedil;&atilde;o local.");
    }

    else{

      console.log("[PROJETO] Remo&ccedil;&atilde;o remota.");
    }

    return varBooGenericRetVal;
  }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) FUNÇÃO FUN_STR_READFILE()
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  async function fun_str_readFile(){

//////////////////////////////////////////////////////////////////////
////////  (CC) CONSTANT CON_PICKEDDOCUMENT
////////
////////  Declarar e inicializar a constante con_pickedDocument com um
////////  documento a conter a chave da API.
//////////////////////////////////////////////////////////////////////
    const con_pickedDocument = await DocumentPicker.pickSingle(

                                 {
                                   type: [DocumentPicker.types.allFiles],
                                 }
                               );
    
    var var_str_return       = '';
    
    return var_str_return;
  }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) DECLARATION(S) AND INITIALIZATION(S)
////////
////////  Declarações e inicializações de constantes e variáveis.
////////
////////  A constante cache é declarada e inicializada como uma
////////  instância de Cache.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

  const cache             = new Cache({
                                         namespace: "App",
                                         policy:    {
                                                       maxEntries: 50000,
                                                       stdTTL:     0
                                                    },
                                         backend:   AsyncStorage
                                     });

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) DECLARATION AND INITIALIZATION OF CONSTRJOBREMOTEURL
////////
////////  For REST purposes on the job-related online spreadsheet.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  const conStrJobRemoteURL = "https://";

  var varBooGenericRetVal  = true;
  var varInode;
  var varViewGenericElement;

  var varStrPlatform;
  var varData;
  var varBooIsLocal       = true;
  var varStrInodeName;
  var varInodeType;
} // Closure of function Library().

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BODY
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export default Library();

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) ENDING
////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
