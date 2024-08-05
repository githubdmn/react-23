import { FeedbackList, FeedbackStats, Header } from './components';
import { feedback as feedbackJSON } from '../db.json';
import { useState } from 'react';
import { FeedbackProps } from './types';

function App() {
  const FeedbackData = JSON.parse(JSON.stringify(feedbackJSON));

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item: FeedbackProps) => item.id !== id));
    }
  };

  return (
    <>
      <Header title="This is optional" />

      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
