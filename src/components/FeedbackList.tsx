import { FeedbackItemType } from '@/types';
import { useContext } from 'react';
import { FeedbackContext } from '../context';
import FeedbackItem from './FeedbackItem';



function FeedbackList() {

  const { feedbackList } = useContext(FeedbackContext);
  

  if (feedbackList.length === 0) {
    return (
      <>
        <p>No feedback yet</p>
      </>
    );
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
