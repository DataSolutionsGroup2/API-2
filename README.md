<h1>ABP</h1>
<p align="center">
  <img src="Images/logotipo_empresa_p.jpg" width="300" height="300">
</p>
<h1 align="center">DSG - DATA SOLUTIONS GROUP</h1>
 
 > Status: Developing ⚠️

<h1 align="center"> Projeto: 25/03/2024 a 13/06/2024 </h1>  

<h2>💡 Sobre o Projeto:</h2>

Desenvolver um programa de gestão de projetos eficiente e fácil de usar que permita aos usuários gerenciar, atualizar e colaborar em projetos de qualquer escala. Onde a principal função será monitorar e evidenciar em gráficos os relatorios de cada agente, da área percorrida e atividades realizadas dentro da geometria solicitada e demandada pelo Gestor de Projetos. Ou seja o principal objetivio é criar um sistema onde é possivel realizar relatorios diarios sobre atividades exercidas e realizadas separando elas pontualmente a cada usuario criado e utilizado no sistema, projeto desenvolvido justamente para resolver o problema de gestão em projetos de grande escala. 


## ⚙️ Instalação

Primeiro crie uma pasta em sua área de trabalho e abrindo ela com o `cmd` clone o repositório do github e abra-o no `VSCode` com os codigos na sequencia.
```
git clone https://github.com/DataSolutionsGroup2/API-2/ .

code .
```
Após abrir a pasta no `VSCode` abra o terminal e instale todas as dependências para rodar o projeto da pasta `front-end` e da pasta `back-end`, siga os passos de comandos à baixo:
```
cd .\front-end\
npm i
cd ..

cd .\back-end\
npm i
cd ..
```
Após realizar a instalação de dependências do projeto, é necessario subir o servidor do `front-end` e do `back-end` para que a aplicação funcione corretamente.
```
cd .\front-end\
npm run dev

abra outro terminal e repita o mesmo na pasta back-end.

cd .\back-end\
npm run dev
```
Não é necessario configurar o `Banco de Dados` pois ele se encontra em nuvem, utilizamos a plataforma `Heroku` para hospedar o servidor gratuitamente.

## 📝 Requisitos Funcionais
* O gestor deverá ser capaz de carregar o polígono que delimita a área do projeto
* O gestor deverá ser capaz de carregar a grade de polígonos especificando as dimensões de cada recorte (retângulo)
* O gestor deverá ser capaz de cadastrar editor e revisor
* O gestor deverá ser capaz de definir a área de trabalho do usuário. A área de trabalho é um retângulo na grade
* O gestor deverá ser capaz de gerar as estatísticas: número de polígonos, área total, quantidade de correções e quantidade de correções executadas
* O gestor deverá ser capaz de filtrar por revisor e por período para gerar as estatísticas;
* O gestor deverá ser capaz de gerar estatísticas de quantidade de polígonos mapeados, quantidade de correções e de área de polígonos mapeados por editor
* O gestor deverá ser capaz de visualizar e exportar relatórios com as estatísticas no formato PDF.

## 📚 Requisitos Não Funcionais
* Documentação no GitHub: repositório do código fonte de cada sprint, descrição do projeto, link para cada entrega de sprint, backlog do produto, backlog de cada sprint, requisitos do cliente (user stories), prints das telas ou link para o portal, burndown de cada sprint mostrando funcionalidades (quantidade de requisitos) implementadas versus tempo,tecnologias utilizadas e membros da equipe (link para o GitHub de cada membro)
* Utilizar o Trello para gerenciar o backlog do produto. Preferencialmente fazer a integração entre o Trello e GitHub
* No Trello, cada cartão representa uma tarefa ou uma história de usuário
* Os membros da equipe podem adicionar links para problemas do GitHub relevantes a cada cartão no Trello
* Quando um membro da equipe começa a trabalhar em uma tarefa, ele pode mover o cartão correspondente para a coluna "Em progresso"
* Quando o trabalho em uma tarefa estiver concluído e um pull request for aberto no GitHub, o membro da equipe pode adicionar o link do pull request ao cartão no Trello
* Os membros da equipe podem monitorar o progresso das tarefas no Trello e visualizar os links para os problemas e pull requests correspondentes no GitHub.
* Back-end: TypeScript e Node.js;
* Front-end: React TypeScript, HTML e CSS;
* Armazenamento: SGBD PostgreSQL;
* Autenticação de usuário.


### Entregas 
**Sprint**  | **Inicio / Fim** | **Status**         | **Link**
:---------: | :------:    | :-------:          | :-------:
01          | 25/03 - 17/04   | ✅                | <a href="#sprint1">Sprint 1</a>
02          | 22/04 - 15/05   | ✅                | <a href="#sprint2">Sprint 2</a>
03          | 20/05 - 12/06   | ⚠️                | <a href="#sprint3">Sprint 3</a>


## 🚀Ferramentas Utilizadas

* HTML  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" width="30" height="30" align="center" />
* CSS  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="30" height="30" align="center" />
* Javascript  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="Javascript" width="25" height="25" align="center" />
* Typescript  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="Typescript" width="25" height="25" align="center" />
* React  <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" width="25" height="25" align="center" />
* Tailwind  <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind" width="25" height="25" align="center" />
* Express  <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" width="25" height="25" align="center" />
* PostgreSQL  <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" width="35" height="35" align="center" />
* Node.js  <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" width="35" height="35" align="center" />
* Vite  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" width="25" height="25" align="center" />
* VS Code  <img src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="VS Code" width="25" height="25" align="center" />
* Git  <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" width="25" height="25" align="center" />

## 👩‍💻Equipe
<table>
  <thead>
    <tr>
      <th>Função</th>
      <th>Integrante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Scrum Master</td>
      <td>
        <a href="https://github.com/FPBueno">
          <img src="https://github.com/FPBueno.png" width="50" height="50" style="border-radius: 50%;" alt="FPBueno">
        </a>
      </td>
    </tr>
    <tr>
      <td>Product Ownerr</td>
      <td>
        <a href="https://github.com/MingRenan">
          <img src="https://github.com/MingRenan.png" width="50" height="50" style="border-radius: 50%;" alt="MingRenan">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/Isaac-Exon">
          <img src="https://github.com/Isaac-Exon.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/rodrigoaslima">
          <img src="https://github.com/rodrigoaslima.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/TiagoSan23">
          <img src="https://github.com/TiagoSan23.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
    <tr>
      <td>Dev Team</td>
      <td>
        <a href="https://github.com/evellsil">
          <img src="https://github.com/evellsil.png" width="50" height="50" style="border-radius: 50%;" alt="Isaac-Exon">
        </a>
      </td>
    </tr>
  </tbody>
</table>

 
<h1 id="sprint1"align="center"> Sprint 1: 25/03/2024 a 17/04/2024 </h1> > Status: Check ✅

<p align="center">
  <a href="#prototipo">Protótipo</a> |
    <a href="#backlog">Backlog</a> |
    <a href="#burndown">Burndown</a> |
  <a href="#UML">UML</a> |
    <a href="#pbacklog">Product Backlog</a> | 
    <a href="#review">Sprint Review</a> |
    <a href="#entrega1">Video</a> 
    </p>

## Resumo:
Após algumas reuniões com o cliente tentando entender a real necessidade dele fizemos algumas telas no Front-End na tentativa de entregar um MVP descente,
portanto fizemos 4 telas sendo elas 1 de login e outras 3 de um usuário já logado.

<span id="backlog"></span>
<h2>⚙️Backlog </h2>
<p>Tabela do backlog do projeto.</p>
<img src="/Images/backlogsprint3version2.png" alt="backlog" width="1200">

<h2 id="prototipo">Protótipo 🔧</h2>
Aqui temos o nosso prototipo implementado no projeto da tela de login.

<img src="/Images/LoginV1.jfif" alt="Prototipo" width="1200">
Após a ideia ser aceita pelo grupo decidimos então dar continuidade ao desenvolvimento da tela de login incrementando um pouco da personalidade do nosso cliente utilizando a paleta de cores deles, chegando na versão final até o momento.
<img src="/Images/LoginV2.png" alt="LoginV1" width="1200">
Já tendo previamente uma ideia do design que queriamos em nossa aplicação seguimos desenvolvendo as demais partes do que seria a tela do Gestor no projeto, o que seria a tela principal que ele entraria logo após logar, pensamos em aparecer um grafico mostrando como estaria o andamento do projeto geral.
<img src="/Images/telaPrincipalGestor1.png" alt="GestorPrincipal1" width="1200">
O gestor tabém pode criar usuários, sendo eles o Revisor e o Editor então também decidimos implementar essa interface em nosso projeto com campos a serem preenchidos referente a esse novo usuario.
<img src="/Images/criarUsuarioGestor1.png" alt="criarUsuarioGestor1 width="1200">
E nossa ultima implementação nessa entrega totalizando as 4 telas sendo 1 de login e outras 3 de um usuario ja logado em nosso caso o gestor fizemos uma ultima tela com uma interface que possibilitava ele filtrar por cidade e ver todos os analistas e demais imformações sobre uma determinada cidade previamente selecionada.
<img src="/Images/pesquisaGestor1.png" alt="criarUsuarioGestor1 width="1200">
<span id="UML"></span>
<h1 id="UML">⚙️UML</h1>
<p>Aqui temos o UML de casos de uso do nosso projeto com uma visão do funcionamento de perspectiva externa.</p>
<img src="/Images/caso_de_uso.jpeg" alt="UML" width="1100" height="600">

<span id="burndown"></span>
<h2>⚙️Burndown</h2>
<p>Aqui temos o gráfico do burndown com a linha ideal e a linha do desempenho da nossa equipe nas conclusões das atividades introduzidas no product backlog</p>
<img src="/Images/GraficoBurndown.png" alt="burndown" width="1200" >

<span id="pbacklog"></span>
<h2>⚙️Product Backlog</h2>
<p>Product backlog feito pelo nosso Product Owner com as atividades que foram implementadas na aplicação nessa sprint com os seus niveis de prioridades.</p>
<img src="/Images/burndown.png" alt="product backlog">

<span id="review"></span>
<h2>Sprint review</h2>
<p>Aqui temos a Sprint Review que acordado com a equipe sobre coisas para parar, continuar e começar a fazer.</p>
<img src="/Images/SprintReview.png" alt="Sprint Review" width="1200" >


<h3 id="entrega1">Video do Projeto</h3>
<a href="https://youtu.be/TVE2tWdRy30" target="_blank">Video completo Sprint 1 </a> 

<h1 id="sprint2" align="center"> Sprint 2 - 22/04/2024 a 15/05/2024 </h1> > Status: Check ✅

<p align="center"> 
    <a href="#burndown2">Burndown</a> |
    <a href="#pbacklog2">Product Backlog</a> | 
    <a href="#review2">Sprint Review</a> |
    <a href="#trello2">Trello</a> |
    <a href="#projeto2">Projeto</a> |
    <a href="#entrega2">Vídeo</a>

## Resumo:
Como na Sprint passada focamos demais na entrega de um Front-End descente acabamos que por sua vez negligenciando a parte de Back End do projeto, então em grupo decidimos focar unicamente em entregas de Back End nessa Sprint com requisições ao Banco de dados de Get, Post, Put e Delete.

<h2 id="trello2">Trello</h2>
Primeiramente aqui temos como as tasks foram divididas pelo nosso Scrum Master com a utilização da ferramenta trello pra gerenciar as tarefas e implementações a serem feitas no projeto.
<img src="/Images/trelloSprint2.png" alt="trello" width="1200">

<span id="pbacklog2"></span>
<h2>✏️ Product Backlog</h2>
<p>Como cometemos alguns erros na entrega passada no quesito definir a prioridade como basico ao invés de baixo nessa sprint resolvemos esse erro.</p>
<img src="/Images/backlogsprint3.jfif" alt="product backlog" width="1200">

<h2 id="projeto2">Projeto:</h2>
Começando com uma das primeiras implementações feitas nessa sprint temos a criação de usuarios no banco de dados, que consiste em um post que passa os parametros de criação do usuario em um JSON.
<img src="/Images/CriarUsuarioBE.png" alt="CriarUsuarioBE" width="1200">

Fizemos também um get na tabela tbgrade_atuacao filtrando por regiao e passando o analista que queremos ver, essa consulta serve para vermos todas as atribuições que um analista tem em uma determinada cidade.
<img src="/Images/getAnalistaBE.png" alt="CriarUsuarioBE" width="1200">

Temos também um put que consiste em atualizar um usuario já existente no sistema.
<img src="/Images/putUsuarioBE.png" alt="CriarUsuarioBE" width="1200">

E nossa ultima implementação feita no sistema foi um Delete que exclui um usuario existente na tabela.
<img src="/Images/deleteUserBE.png" alt="CriarUsuarioBE" width="1200">

<span id="burndown2"></span>
<h2>⚙️Burndown</h2>
<p>Aqui temos o gráfico do burndown com a linha ideal e a linha do desempenho da nossa equipe nas conclusões das atividades introduzidas no product backlog</p>
<img src="/Images/Burndown2.jfif" alt="burndown" width="1200" >

<span id="review2"></span>
<h2>Sprint review</h2>
<p>Aqui temos a Sprint Review dessa sprint, houveram poucas mudanças pois não conseguimos consertar alguns de nosso erros.</p>
<img src="/Images/SprinReview2.jfif" alt="Sprint Review" width="1200" >

<h3 id="entrega2">Video do Projeto</h3>
<a href="https://youtu.be/cIjC-j5Lv38" target="_blank">Video completo Sprint 2 </a>

<h1 align="center"> Sprint 3 - 20/05 a 12/06 </h1>  > Status: Developing ⚠️
<p align="center"> 
    <a href="#burndown3">Burndown</a> |
    <a href="#pbacklog3">Product Backlog</a> | 
    <a href="#review3">Sprint Review</a> |
    <a href="#trello3">Trello</a> |
    <a href="#projeto3">Projeto</a> |
    <a href="#entrega3">Vídeo</a>

  ## Resumo:
  Na sprint passada erramos em alguns aspectos no projeto no quesito compreensão do que era para ser entregue, mas nessa sprint terminamos todo o resto que nos faltam, conectamos o BackEnd com o FrontEnd fizemos o resto das requisições que faltavam e fizemos alguns ajustes no FrontEnd do projeto para que tudo ficasse o melhor possível e consertamos tudo que não estava de acordo com a visão do cliente.

  <span id="pbacklog3"></span>
<h2>✏️ Burndown</h2>
<p></p>
<img src="/Images/burndownSprint3.png" alt="product backlog" width="1200">


  <span id="pbacklog3"></span>
<h2>✏️ Product Backlog</h2>
<p></p>
<img src="/Images/ProductBacklog3.png" alt="product backlog" width="1200">


  <h2 id="trello3">Trello</h2>
  Acabamos por decidir trocar nosso Scrum Master portanto é possivel notar uma pequena diferença na forma que as tarefas foram criadas nessa sprint.
  <img src="/Images/trellosprint3.png" alt="trello3" />

  ## Projeto:
  <div id="projeto3"></div>
  Aqui temos algumas fotos de telas que foram implemtadas nessa sprint que estavam faltando para a completude de nossa entrega, sendo ela pagina de revisor e editor, cada uma dessas telas tem tanto o Front End quanto o Back End vejamos abaixo.

  <h2>Revisor</h2>
  Como dito anteriormente aqui estão as telas do revisor em nosso aplicação, um dos requisitos na documentação era de que o revisor deveria ter acesso aos dados de mapeamento por editor.
  <img src="/Images/paginarevisor1.png" alt="telaRevisor1" />
  
Também fizemos uma pagina para ver os apontamento de correções de cada analista por cidade.
<img src="/Images/paginarevisor2.png" alt="telaRevisor2" />

E por último decidimos adicionar alguns gráficos que poderiam ser uteis ao revisor.
<img src="/Images/" alt="telaRevisor3"/>

<h2>Editor</h2>
Assim como o revisor na parte de editor também decidimos implementar 3 telas em nossa aplicação, veja abaixo:
<img src="" alt="" />
[Conteúdo a ser adicionado]


  
