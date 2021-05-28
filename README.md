
<h1 align="center">Desafio PublicSoft</h1>
<h3 align="center">Sistema de gestão de contratos</h3>

### Features
- [x] Autenticação JWT
- [x] Cadastro de Prestadores de Serviço
- [x] Cadastro de Contratos
- [ ] Dashboard (Em desenvolvimento)

### 🛠 Documentação 

Swagger - [Documentação da API](http://api.desafiopublicsoft.cvmakers.com.br/)

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Node.js
  - Express
  - Typeorm
  - Tsyring
  - Jest (Testes unitarios - Coverage: 90%) 
- Angular
  - NG-ZORRO
- TypeScript

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). [Angular](https://angular.io/) [Angular] [Docker](https://www.docker.com/)

### 🎲 Rodando o BackEnd (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/carlosajr/desafioPublicSoft.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafioPublicSoft

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev 

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# Para executar em Produção
$ sudo docker-compose up --build -d

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🎲 Rodando o FrontEnd (Cliente)

```

# Clone este repositório
$ git clone <https://github.com/carlosajr/desafioPublicSoft.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafioPublicSoft

# Vá para a pasta server
$ cd frontend

# Instale as Dependencias
$ npm install

# Execute o servidor
$ ng serve

# O servidor inciará na porta:3333 - acesse <http://localhost:4200>

```

<h3 align="center">Agradeço a oportunidade de participar deste desafio 😉 </h3>


