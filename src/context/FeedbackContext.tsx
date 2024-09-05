/* eslint-disable @typescript-eslint/no-unused-vars */
import { FeedbackItemType, FeedbackContextType, FeedbackList } from '@/types';
import { createContext, useState, ReactNode } from 'react';
import { customAlphabet } from 'nanoid';
import { feedback as feedbackJSON } from '../../db.json';

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackList: [],
  deleteFeedbackItem: () => { },
  addFeedbackItem: () => { },
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {

    const FeedbackData = JSON.parse(JSON.stringify(feedbackJSON));


  const [feedbackList, setFeedbackList] = useState<FeedbackList>(FeedbackData);

  const deleteFeedbackItem = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbackList(
        feedbackList.filter((item: FeedbackItemType) => item.id !== id),
      );
    }
  };

  const addFeedbackItem = (newFeedback: FeedbackItemType) => {
    newFeedback.id = +customAlphabet(`1234567890`, 5)();
    setFeedbackList([newFeedback, ...feedbackList]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbackList, deleteFeedbackItem, addFeedbackItem }}>
      {children}
    </FeedbackContext.Provider>
  );
};
