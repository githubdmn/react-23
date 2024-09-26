import { FeedbackItemType } from './feedbackItem';
import { FeedbackList } from './feedbackList';

export type FeedbackContextType = {
  feedbackList: FeedbackList;
  isLoading: boolean;
  deleteFeedbackItem: (id: number) => void;
  addFeedbackItem: (newFeedback: FeedbackItemType) => void;
  updateFeedbackItem: (id: number, updatedFeedback: FeedbackItemType) => void;
};
