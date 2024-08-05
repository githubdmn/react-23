import { FeedbackProps } from '@/types';
import Card from './Card';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem(props: FeedbackProps) {

  return (
    // Passing children: The children (React.ReactNode) prop is implicitly passed
    // when you include JSX elements within a component's tags.
    // In this case, the div elements are passed as children to the Card component.
    <Card>
      <div className="num-display">{props.rating}</div>
      <button className="close" onClick={() => props.handleDelete(props.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{props.text}</div>
    </Card>
  );
}

export default FeedbackItem;
