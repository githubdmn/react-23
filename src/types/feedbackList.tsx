import { FeedbackProps } from "./feedback";


export type FeedbackListProps = {
  feedback: FeedbackProps[];
  handleDelete?: (id: number) => void;
};