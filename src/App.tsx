import {
  AboutLinkIcon,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header,
  Post,
} from './components';
import { feedback as feedbackJSON } from '../db.json';
import { useState } from 'react';
import { FeedbackProps } from './types';
import { customAlphabet } from 'nanoid';
import { AboutPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const FeedbackData = JSON.parse(JSON.stringify(feedbackJSON));

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item: FeedbackProps) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback: FeedbackProps) => {
    newFeedback.id = +customAlphabet(`1234567890`, 5)();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <BrowserRouter>
      <Header title="This is optional" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} /> // /post /post/:id /post/:id/:name /post/*
        </Routes>
        <AboutLinkIcon />
      </div>
    </BrowserRouter>
  );
}

export default App;
