import { FeedbackListProps } from '@/types';
import FeedbackItem from './FeedbackItem';

function FeedbackList(prop: FeedbackListProps) {
  if (prop.feedback.length === 0) {
    return (
      <>
        <p>No feedback yet</p>
      </>
    );
  }

  return (
    <>
      <div className="feedback-list">
        {prop.feedback.map((item) => (
          // Key Prop: The key prop is specified in the parent component (FeedbackList) and
          //is used by React for optimizing rendering. It should be unique among siblings.
          <FeedbackItem
            key={item.id}
            {...item}
            //   handleDelete={() => {
            //     console.log(item.id);
            //   }}
            handleDelete={prop.handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
