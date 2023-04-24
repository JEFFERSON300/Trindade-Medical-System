# API Trindade Medical System

<p align="justify">A API Trindade Medical System é uma solução interessante para hospitais e clínicas médicas que precisam gerenciar informações de pacientes, médicos e enfermeiros de forma mais eficiente e segura. Através dessa API, é possível cadastrar, atualizar e deletar os dados dos pacientes, médicos e enfermeiros em um banco de dados.</p>

## Tecnologias utilizadas

Node.js
Express
PostgreSQL

## Breve Instruções de como executar localmente

<p align="justify">Para executar o programa você precisa ter o Node instalado em sua máquina e o git, caso não tenha segue os links para instalação. Links para download: <a href="https://nodejs.org/en/download"> Node</a> e <a href="https://git-scm.com/downloads">Git</a>.

<p align="justify">Para executar os comandos abaixo, primeiro crie uma pasta com o nome que desejar e clique com o botão direito do mouse dentro da pasta criada e escolha a opção de executar Git Bash Here (necessário ter instalado o Git).</p>

```
$ git clone https://github.com/JEFFERSON300/Trindade-Medical-System.git

$ cd Trindade-Medical-System

$ npm install
```

<p align="justify">Há um arquivo .env-example para armazenar informações de configuração, como as credenciais de acesso ao banco de dados. Esse arquivo serve como modelo e deve ser editado com as informações do banco de dados do usuário. Após inserção das informações necessárias, o arquivo deve ser renomeado para .env. Comando para iniciar a API, após as etapas anteriores terem sido concluidas. </p>

```
$ npm start
```

<p align="justify">Para fazermos os testes da API precisamos de uma framework chamado Insomnia, que simula o frontend da aplicação. Link para download: <a href="https://insomnia.rest/download">https://insomnia.rest/download</a>.</p>

![Exemplo Insomnia](/images/Projeto.png)

<p align="justify">Paciente, médico e enfermeiro tem uma rota especifica para cadastro, atualização e deleção de informações no banco de dados. Abaixo há uma matriz com as rotas e as possibilidades para cada rota. Vale ressaltar que onde há id nos links deve ser substituindo por um número que equivale a ordem de cadastramento no banco de dados.</p>

|                                               | Patient                                                                           |
| :-------------------------------------------- | :-------------------------------------------------------------------------------- |
| http://localhost:3333/api/pacientes           | Inserção de pacientes                                                             |
| http://localhost:3333/api/pacientes/id        | Atualização de dados dos pacientes                                                |
| http://localhost:3333/api/pacientes/id/status | Atualização de status do paciente                                                 |
| http://localhost:3333/api/pacientes           | Listar os pacientes pelo status ou todos                                          |
| http://localhost:3333/api/pacientes/id        | Listar pacientes pelo id                                                          |
| http://localhost:3333/api/pacientes/id        | Deletar pacientes pelo id                                                         |
|                                               | **Doctor**                                                                        |
| http://localhost:3333/api/medicos             | Inserção de médicos                                                               |
| http://localhost:3333/api/medicos/id          | Atualização de dados dos médicos                                                  |
| http://localhost:3333/api/medicos/id/status   | Atualização de status do médico                                                   |
| http://localhost:3333/api/medicos             | Listar os médicos pelo status ou todos                                            |
| http://localhost:3333/api/medicos/id          | Listar médicos pelo id                                                            |
| http://localhost:3333/api/medicos/id          | Deletar médicos pelo id                                                           |
|                                               | **Nurse**                                                                         |
| http://localhost:3333/api/enfermeiros         | Inserção de enfermeiros                                                           |
| http://localhost:3333/api/enfermeiros/id      | Atualização de dados dos enfermeiros                                              |
| http://localhost:3333/api/enfermeiros         | Listar todos os enfermeiros                                                       |
| http://localhost:3333/api/enfermeiros/id      | Listar enfermeiros pelo id                                                        |
| http://localhost:3333/api/enfermeiros/id      | Deletar enfermeiros pelo id                                                       |
|                                               | **Medical Care (Doctor-Patient)**                                                 |
| http://localhost:3333/api/atendimentos        | Atualização de status do paciente e incremento dos atributos do paciente e médico |

<p align="justify">O diagrama mostra o modelo do banco de dados para os pacientes, médicos e enfermeiros. A simbologia também apresenta quais dados podem ser inseridos, atualizados, filtrados/visualizados e deletados quando utlizado as rotas especificas.</p>

![Diagrama](/images/Diagrama.png)

### Insert

<p align="justify">I - Dados que podem ser adicionados no sistema para cadastrar pacientes, médicos, enfermeiros e no atendimento médico. </p>
<p align="justify">I<span style="color:red">*</span> - Representa dados obrigatórios que precisam ser fornecidos no cadastro de pacientes, médicos, enfermeiros e no atendimento médico.</p>

### Update

<p align="justify">U - Dados que podem ser atualizados a depender da rota chamada. Cores diferentes significam rotas particulares para alteração de dados especificos. </p>
<span style="color:#6195E7">U</span> - Atualiza apenas dados pessoais do paciente, médico ou enfermeiro.</p>
<span style="color:red">U</span> - Atualiza dados relacionado ao status do paciente e do médico. </p>
<span style="color:green">U</span> - Atualiza dados relacionado ao atendimento do médico ao paciente.

### Select

<p align="justify">S - Visualização de dados do sistema de um respectivo paciente, médico ou enfermeiro apartir do id. Permite também visualizar todos os pacientes, médicos e enfermeiros, ou pode ser aplicado filtro para visualização de apartir do status. <p>

### Delete

D - Deleta dados do sistema de um respectivo paciente, médico ou enfermeiro apartir do id. <p>

## Melhorias

<p align="justify">Existem diversas atividades relacionadas aos pacientes, médicos e enfermeiros que poderiam ser implementadas no software, de acordo com o contexto e as necessidades do local onde ele será utilizado. Algumas possíveis funcionalidades incluem a medição do tempo médio de espera desde a chegada do paciente até o atendimento, o registro da quantidade de médicos e enfermeiros que faltaram em determinado dia e a geração de relatórios com informações sobre o fluxo de pacientes ao longo do tempo.</p>

<p align="justify">A inclusão dessas funcionalidades no software pode trazer benefícios significativos para a gestão do atendimento em unidades de saúde. Por exemplo, a medição do tempo médio de espera pode ajudar a identificar gargalos no atendimento e a implementar medidas para reduzir o tempo de espera dos pacientes. Já o registro da quantidade de médicos e enfermeiros ausentes pode auxiliar na identificação de problemas de escalas de trabalho e na alocação mais eficiente de recursos humanos.</p>

<p align="justify">Além das melhorias no software, é possível criar um frontend para tornar a utilização da API mais amigável e acessível para os usuários finais. Embora a API em si possa fornecer uma funcionalidade poderosa, a interface de usuário pode ser difícil de usar ou complicada para aqueles que não são desenvolvedores experientes.</p>

<p align="justify">É importante ressaltar que a implementação dessas funcionalidades requer a colaboração e o engajamento dos profissionais de saúde envolvidos no atendimento, a fim de garantir a coleta adequada e precisa das informações necessárias. Além disso, a segurança e a confidencialidade dos dados devem ser tratadas com cuidado para preservar a privacidade dos pacientes e dos profissionais envolvidos.</p>
<p align="justify">Em resumo, a inclusão de funcionalidades adicionais no software e a criação de um frontend mais acessível podem trazer benefícios significativos para a gestão do atendimento em unidades de saúde, desde que sejam implementadas de forma colaborativa e com cuidado em relação à segurança e privacidade dos dados.</p>
