# 🔮 J_Oraculo

# 🔮 J_Oraculo

Projeto pessoal que integra frontend com backend para responder perguntas usando a API do Gemini (Google), com suporte a entrada por voz e barra de progresso visual.

## ✨ Funcionalidades

- Interface web simples para envio de perguntas
- Integração com modelo de linguagem (Gemini)
- Resposta dinâmica via backend Node.js
- Barra de progresso animada enquanto aguarda resposta
- Entrada de perguntas por voz (Web Speech API)
- Responsivo para dispositivos móveis
- Separação clara entre frontend e backend

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- API Key do Gemini salva em um arquivo `.env` na pasta `backend`

Exemplo do arquivo `.env`:
```
GEMINI_API_KEY=sua_chave_aqui
```

### Passos

1. Navegue até a pasta backend:
    ```
    cd backend
    ```

2. Instale as dependências:
    ```
    npm install
    ```

3. Inicie o servidor:
    ```
    node server.js
    ```

4. Abra o arquivo `index.html` na raiz do projeto em um navegador.

## 🛠️ Tecnologias usadas

- HTML, CSS, JavaScript (frontend)
- Node.js + Express (backend)
- API Gemini (Google)
- Web Speech API (entrada por voz)

## 📁 Estrutura de pastas

```
oraculo-projeto/
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── ...
│
├── index.html
├── joraculo.js
├── joraculo.css
└── README.md
```

## 🧠 Inspiração

Criado como projeto pessoal para estudos de integração entre backend, frontend e IA.

## 🧑‍💻 Autor

@Jair-Sousa