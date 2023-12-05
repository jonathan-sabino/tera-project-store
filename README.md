# E-commerce de Games API

Bem-vindo ao repositório da API do E-commerce de Games, desenvolvida como parte do trabalho de conclusão de curso no bootcamp da escola TERA. Esta API foi construída utilizando a stack MERN (MongoDB, Express.js, React.js e Node.js) e tem como objetivo fornecer os serviços necessários para um e-commerce de jogos.

## Configuração Inicial

Certifique-se de ter o Node.js e o MongoDB instalados em seu ambiente de desenvolvimento antes de começar. Além disso, crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Um exemplo pode ser encontrado no arquivo `.env.example`.

```bash
    # Instale as dependências
    npm install
    # Inicie o servidor
    npm start
```

## Endpoints Disponíveis

-   **GET /api/games**: Retorna a lista de jogos disponíveis no e-commerce.

-   **GET /api/games/:id**: Retorna detalhes de um jogo específico com base no ID.

-   **POST /api/games**: Adiciona um novo jogo ao catálogo. (Autenticação necessária)

-   **PUT /api/games/:id**: Atualiza as informações de um jogo existente. (Autenticação necessária)

-   **DELETE /api/games/:id**: Remove um jogo do catálogo. (Autenticação necessária)

-   **POST /api/users/register**: Registra um novo usuário.

-   **POST /api/users/login**: Permite que um usuário faça login.

## Autenticação

Alguns endpoints exigem autenticação. Ao realizar uma requisição que requer autenticação, inclua o token de acesso no cabeçalho da solicitação:

```bash
    Authorization: Bearer SEU_TOKEN_AQUI
```

## Contribuição

Se você deseja contribuir para o desenvolvimento desta API, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações: `git checkout -b feature/nova-feature`.
3. Faça as alterações e commit.
4. Envie um pull request para a branch principal.

## Licença

Este projeto é licenciado sob a [MIT License](https://chat.openai.com/c/LICENSE.md).

Agradecemos por contribuir para o E-commerce de Games API! Se tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato.
