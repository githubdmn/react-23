import { FeedbackItemType } from "./feedbackItem";
import { FeedbackList } from "./feedbackList";

export type FeedbackContextType = {
  feedbackList: FeedbackList;
  deleteFeedbackItem: (id: number) => void;
  addFeedbackItem: (newFeedback: FeedbackItemType) => void;
};