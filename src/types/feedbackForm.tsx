import { FeedbackItemType } from "./feedbackItem";


type FeedbackFormProps = {
  handleAdd: (newFeedback: FeedbackItemType) => void;
};

export default FeedbackFormProps;