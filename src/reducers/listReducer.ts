import { Item } from "@/types/Item";

type addAction = {
  type: "add";
  payload: {
    text: string;
  };
};

type EditTextAction = {
  type: "editAction";
  payload: {
    id: number;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: {
    id: number;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type ListAction = addAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListAction) => {
  switch (action.type) {
    case "add":
        return [...list, {
            id: list.length,
            text: action.payload.text ,
            done: false
        }]
        case "editAction":
          return list.map(t => {
              if (t.id === action.payload.id) {
                  // Retorna um novo objeto com o texto atualizado
                  return { ...t, text: action.payload.newText };
              }
              // Retorna o objeto original se não for o ID correspondente
              return t;
          });

        case 'toggleDone':
            return list.map(item =>
                item.id === action.payload.id
                    ? { ...item, done: !item.done } // Criando um novo objeto
                    : item
            );
       
    case "remove":
        return list.filter(t => t.id !== action.payload.id);
    default:
        return list;
  }
};

// executar alguma ação: recebe,executa e retorna
// qual ação executada
// carga que vai ser mandada
