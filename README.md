# Consulta CEP

Este projeto utiliza um Parse App criado no [Back4app](https://www.back4app.com), que tem conectada uma Bases de Dados pública do [Database Hub](https://www.back4app.com/database) que contém os [CEPs](https://www.back4app.com/database/back4app/api-cep-correios) para consultar um dado CEP e retornar dados como logradouro, bairro, cidade e estado.

Utilize este projeto e a base de dados de CEPs como desejar. A utilização é gratuita.

## Pré-Requisitos

Este programa está escrito em [NodeJS](https://nodejs.org), que é um runtime Javascript, portanto, familiaridade com a linguagem Javascript é desejável.

Será necessário utilizar o Parse SDK para Javascript (Node.JS) para rodar este projeto.
Para sua conveniência, o Parse SDK para Javascript já está incluso no projeto.

Caso queira reinstalá-lo, a forma mais fácil é utilizando-se o [Node Package Manager](https://www.npmjs.com/).

Se seu sistema já tem o [NPM](https://www.npmjs.com/) instalado, basta rodar o seguinte comando:

   $ npm install parse

Toda a documentação do SDK Javascript pode ser encontrada na página de [Javascript Docs](https://www.back4app.com/docs/javascript/parse-javascript-sdk).


## Executando o programa

Para executar o programa, basta rodar o seguinte comando no diretório onde ele foi clonado/descompactado:

  $ node index.js

## Resultado do programa

O exemplo consulta o CEP 99980-974, que é passado sem hífen: 99980974

A saída do programa é a seguinte:

Encontrado(s) 1 resultado(s) para o CEP.
        O logradouro para o CEP 99980974 é: Distrito Capela São José do Capingui
        O bairro para o CEP 99980974 é: Capela São José do Capingui (Distrito)
        A cidade para o CEP 99980974 é: David Canabarro
        O estado para o CEP 99980974 é: RS

## Conta gratuita sem limitações de funcionalidades

A Back4app provê contas gratuitas sem nenhuma limitação de funcionalidades. Para criar sua conta, basta acessar o site da [Back4app](https://www.back4app.com) e completar os formulários.
Até o limite de 600 chamadas de API por minuto, suficiente para ambientes de produção médios, não há cobrança de nenhum tipo de taxa.
Acima deste limite existem planos com diferentes valores para maiores capacidades.

## Utilizando outras Bases de Dados

A Back4app e seus usuários publicam constantemente novas Bases de Dados no [Database Hub](https://www.back4app.com/database), todas gratuitas para uso, compatíveis com REST API e GraphQL.

Verifique a disponibilidade de Bases de Dados que possam ser de seu interesse, ou publique databases que possam interessar a outros usuários. A plataforma colaborativa do [Database Hub](https://www.back4app.com/database) ajuda todos os desenvolvedores a agilizarem o processo de desenvolvimento.

Alguns exemplos de Bases de Dados disponíveis:

  * [Lista de todos os Continentes, Países, Cidades e Idiomas](https://www.back4app.com/database/back4app/list-of-all-continents-countries-cities)
  * [Lista de todas as Cidades do Brasil](https://www.back4app.com/database/back4app/list-of-cities-in-brazil-by-population)
  * [Lista de todos os Modelos de Carros e Marcas](https://www.back4app.com/database/back4app/car-make-model-dataset)
  * [Lista de Aeronaves registradas no Brasil](https://www.back4app.com/database/back4app/aeronaves-registradas-no-brasil)
  * [Lista de todos os CEPs do Mundo](https://www.back4app.com/database/back4app/zip-codes-all-countries-in-the-world)
  * [Lista de todos os Feriados do Brasil 2020](https://www.back4app.com/database/back4app/feriados-brasil-2020)
  * [Lista de todos os Filmes](https://www.back4app.com/database/paul-datasets/dataset-with-all-movies)
  * [Lista de todas as Músicas](https://www.back4app.com/database/paul-datasets/songs-database-api)
