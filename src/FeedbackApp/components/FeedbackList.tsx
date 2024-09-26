import { FeedbackItemType } from '@/FeedbackApp/types';
import { useContext } from 'react';
import { FeedbackContext } from '../context';
import FeedbackItem from './FeedbackItem';
import { Spinner } from '../shared';



function FeedbackList() {

  const { feedbackList, isLoading } = useContext(FeedbackContext);
  

  if (!isLoading && feedbackList.length === 0) {
    return (
      <>
        <p>No feedback yet</p>
      </>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="feedback-list">
        {feedbackList.map((item: FeedbackItemType) => (
          <FeedbackItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
