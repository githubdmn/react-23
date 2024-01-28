export type TodoListResponse = {
  listId: string;
  title: string;
  items: {
    itemId: string;
    text: string;
    isDone: boolean;
  }[];
};
