import { FeedbackItemType } from './feedbackItem.ts';

type FeedbackFormProps = {
  handleAdd: (newFeedback: FeedbackItemType) => void;
};

export default FeedbackFormProps;
