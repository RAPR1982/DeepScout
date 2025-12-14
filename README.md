# B-Hoops Scout Pro

Este é o código fonte do **B-Hoops Scout Pro**.

## Pré-requisitos
Para executar este projeto, precisas de ter o **Node.js** instalado no teu computador.
O Node.js permite executar o servidor (backend) e construir o site (frontend).

## Como Instalar e Correr

### 1. Instalar Dependências
Abre o terminal nesta pasta e corre:

**Para o Servidor (Backend):**
```bash
cd server
npm install
```

**Para o Cliente (Frontend):**
```bash
cd client
npm install
```

### 2. Iniciar a Aplicação
Vais precisar de **dois terminais** abertos:

**Terminal 1 (Servidor):**
```bash
cd server
npm run dev
```
(O servidor vai arrancar em http://localhost:3001)

**Terminal 2 (Cliente):**
```bash
cd client
npm run dev
```
(O site vai abrir em http://localhost:5173 ou 3000)

## Funcionalidades
- **Área Pública**: Home, Sobre, Preços, Login.
- **Área Privada**: Dashboard de Pesquisa de Jogadores (Requer Login).
- **Dados de Teste**: Podes usar `demo@user.com` com a password `password`.
