import { useContext, useState } from 'react';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import { FeedbackItemType } from '@/FeedbackApp/types';
import { FeedbackContext } from '../context';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedbackItem } = useContext(FeedbackContext);

  const handleTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback: FeedbackItemType = {
        id: 0,
        text,
        rating,
      };
      addFeedbackItem(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={submitForm}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextOnChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
