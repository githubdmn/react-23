import { FeedbackItemType } from './feedbackItem.ts';
import { FeedbackList } from './feedbackList.ts';

export type FeedbackContextType = {
  feedbackList: FeedbackList;
  isLoading: boolean;
  deleteFeedbackItem: (id: string) => void;
  addFeedbackItem: (newFeedback: FeedbackItemType) => void;
  updateFeedbackItem: (id: string, updatedFeedback: FeedbackItemType) => void;
};
