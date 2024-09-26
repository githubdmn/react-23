import Card from './Card';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { FeedbackItemType } from '@/FeedbackApp/types';
import { FeedbackContext } from '../context';

function FeedbackItem(prop: FeedbackItemType) {
  const { deleteFeedbackItem, updateFeedbackItem } =
    useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{prop.rating}</div>

      <button className="close" onClick={() => deleteFeedbackItem(prop.id)}>
        <FaTimes color="purple" />
      </button>

      <button
        className="edit"
        onClick={() =>
          updateFeedbackItem(prop.id, {
            id: prop.id,
            text: prop.text,
            rating: prop.rating,
          })
        }
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{prop.text}</div>
    </Card>
  );
}

export default FeedbackItem;
