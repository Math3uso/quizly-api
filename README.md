# 🧠 Quizly - API

Um criador e gerenciador de quizzes interativos com sistema de login JWT, cache em Redis e fluxo dinâmico de progresso.  
Com o **Quizly**, você pode **criar, editar, visualizar e compartilhar quizzes**, além de participar de vários ao mesmo tempo e acompanhar seu desempenho com ranking e pontuação final.

---

## 🚀 Funcionalidades

- ✨ **Criação e edição de quizzes** — cada quiz possui perguntas, alternativas e uma resposta correta.  
- 🧩 **Participação em múltiplos quizzes simultaneamente**.  
- 🔗 **Compartilhamento via link** — envie o link do quiz para outras pessoas participarem.  
- 🧠 **Sistema de ranking** — veja sua posição entre outros participantes.  
- 🏁 **Resultado detalhado** — visualize seu total de respostas corretas ao finalizar.  
- 🔒 **Autenticação JWT** — login e cadastro seguros.  
- ⚡ **Cache inteligente com Redis**  
  - O quiz e o participante são armazenados no cache por cerca de **2 horas**.  
  - O mesmo quiz não pode ser iniciado duas vezes sem **resetar o progresso**.  
  - Caso o usuário saia antes de terminar o quiz, **o progresso é perdido**.  
  - Toda vez que alguém inicia um quiz, ocorre uma **revalidação automática**.  

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Node.js** | Ambiente de execução JavaScript no servidor |
| **NestJS** | Framework para criação de APIs escaláveis |
| **Prisma** | ORM moderno para manipulação do banco de dados |
| **SQLite** | Banco de dados leve e simples para desenvolvimento local |
| **Redis** | Cache em memória de alta performance |
| **JWT (JSON Web Token)** | Autenticação segura por token |
| **Docker Compose** | Orquestração do container Redis |

---

## ⚙️ Como Rodar o Projeto

### 📦 Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 🪄 Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/quizly.git

# Acesse o diretório
cd quizly

# Instale as dependências
npm install

# Suba o Redis via Docker
docker compose up -d

# Crie o arquivo .env

```
### 🧾 `.env` exemplo
```bash
JWT_SECRET=secret123123
DATABASE_URL=file:./dev.db
```
### ▶️ Executar
```bash
npm run start:dev
```

### 🧩 Fluxo do Quiz
1. Quando um quiz é iniciado:
    - Ele e o participante são armazenados no cache Redis.
    - O progresso dura cerca de 2 horas.
2. O mesmo quiz não pode ser reiniciado sem resetar o progresso.

3. Ao resetar o progresso:
    - O cache é limpo e um novo é criado.

4. Resultados só são salvos ao finalizar o quiz.

5. Caso o quiz expire no cache antes de terminar, todo o progresso é perdido.
