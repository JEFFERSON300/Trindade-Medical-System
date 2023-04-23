# API Trindade Medical System

A API Trindade Medical System é uma solução interessante para hospitais e clínicas médicas que precisam gerenciar informações de pacientes, médicos e enfermeiros de forma mais eficiente e segura. Através dessa API, é possível cadastrar, atualizar e deletar os dados dos pacientes, médicos e enfermeiros em um banco de dados.

## Tecnologias utilizadas

Node.js
Express
PostgreSQL

## Breve Instruções de como executar localmente

Para executar o programa você precisa ter o node instalado em sua máquina e o git, caso não tenha segue os links para instalação. Node: https://nodejs.org/en/download e Git: https://git-scm.com/downloads.
Para executar os comandos abaixo, primeiro crie uma pasta com o nome que desejar e clique com o botão direito do mouse dentro da pasta criada e escolha a opção de executar Git Bash Here (necessário ter instalado o Git).

```
$ git clone https://github.com/JEFFERSON300/Trindade-Medical-System.git

$ cd Trindade-Medical-System

$ npm install

```

Há um arquivo .env-example para armazenar informações de configuração, como as credenciais de acesso ao banco de dados. Esse arquivo serve como modelo e deve ser editado com as informações do banco de dados do usuário. Após inserção das informações necessárias, o arquivo deve ser renomeado para .env. Comando para iniciar a API, após as etapas anteriores terem sido concluidas.

```
$ npm start
```

Para fazermos os testes da API precisamos de uma framework chamado Insomnia, que simula o frontend da aplicação. Link para download: https://insomnia.rest/download.

![Exemplo Insomnia](C:\Users\Jefferson Pedro\Downloads\Projeto.png)
