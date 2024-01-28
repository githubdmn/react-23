export type UpdateItemRequest = {
  userId: string;
  listId: string;
  itemId: string;
  text: string;
  isDone: boolean;
};
