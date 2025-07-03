# Lista de Tarefas com React e useReducer

Este é um projeto simples desenvolvido em **React** com **TypeScript** para gerenciar uma lista de tarefas utilizando o hook `useReducer`. O projeto é ideal para fins de aprendizado e explora o uso de reducers, manipulação de estado, e gerenciamento de ações.

## Funcionalidades

-   **Adicionar Tarefa:** Insira um texto e clique no botão "ADICIONAR" para criar uma nova tarefa.
-   **Marcar como Concluído:** Utilize a checkbox para alternar entre concluído e não concluído.
-   **Editar Tarefa:** Clique no botão "Editar" para modificar o texto da tarefa.
-   **Remover Tarefa:** Clique no botão "Excluir" para apagar a tarefa da lista.

## Captura do Projeto
<img src="/public/assets/captura_projeto.png"></img>

## Estrutura do Projeto

### Principais Arquivos

-   **`listReducer.tsx`**
    
    -   Contém a lógica para gerenciar as ações do estado da lista (`add`, `editAction`, `toggleDone`, `remove`).
    -   Retorna uma nova lista com base na ação disparada.
-   **`page.tsx`**
    
    -   Implementa a interface da lista de tarefas.
    -   Utiliza o `useReducer` para manipular o estado da lista e `useState` para gerenciar o campo de entrada.
-   **`item.ts`**
    
    -   Define o tipo `Item` com os atributos:
        -   `id`: Identificador único da tarefa.
        -   `text`: Texto descritivo da tarefa.
        -   `done`: Indica se a tarefa está concluída.

## Tecnologias Utilizadas

-   **React** com **TypeScript**
-   **Tailwind CSS** para estilização
-   **useReducer** e **useState**

## Como Executar

1.  Clone este repositório:
    
    `[git clone https://github.com/ThainaSantoss/ListaDeTarefas-react.git` 
    
2.  Instale as dependências:
        
    `npm install` 
    
3.  Inicie o servidor de desenvolvimento:
    
    `npm run dev` 
    
4.  Acesse em seu navegador:
    
    
    `http://localhost:3000`
