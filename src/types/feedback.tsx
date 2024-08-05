

export type FeedbackProps = {
  id: number;
  rating: number;
  text: string;
  handleDelete: (id: number) => void;
};