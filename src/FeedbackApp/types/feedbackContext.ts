import { FeedbackItemType } from './feedbackItem';
import { FeedbackList } from './feedbackList';

export type FeedbackContextType = {
  feedbackList: FeedbackList;
  isLoading: boolean;
  deleteFeedbackItem: (id: string) => void;
  addFeedbackItem: (newFeedback: FeedbackItemType) => void;
  updateFeedbackItem: (id: string, updatedFeedback: FeedbackItemType) => void;
};
