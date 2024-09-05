
import Card from './Card';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { FeedbackItemType } from '@/types';
import { FeedbackContext } from '../context';

function FeedbackItem(prop: FeedbackItemType) {

  const { deleteFeedbackItem } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{prop.rating}</div>
      <button className="close" onClick={() => deleteFeedbackItem(prop.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{prop.text}</div>
    </Card>
  );
}

export default FeedbackItem;
