/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FeedbackItemType,
  FeedbackContextType,
  FeedbackList,
} from '@/FeedbackApp/types';
import { createContext, useState, ReactNode, useEffect } from 'react';
import { customAlphabet } from 'nanoid';
import {
  deleteFeedback,
  getFeedback,
  addFeedback,
  updateFeedback,
} from './FeedbackCRUD';

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackList: [],
  isLoading: false,
  deleteFeedbackItem: () => {},
  addFeedbackItem: () => {},
  updateFeedbackItem: () => {},
});

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState<FeedbackList>([]);

  useEffect(() => {
    const fetchData = async () => {
      const feedbackData = await getFeedback();
      setFeedbackList(feedbackData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const deleteFeedbackItem = async (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await deleteFeedback(id);
    }
  };

  const addFeedbackItem = (newFeedback: FeedbackItemType) => {
    newFeedback.id = +customAlphabet(`1234567890`, 5)();
    addFeedback(newFeedback);
  };

  const updateFeedbackItem = (
    id: number,
    updatedFeedback: FeedbackItemType,
  ) => {    
    updateFeedback(id, updatedFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedbackList,
        deleteFeedbackItem,
        addFeedbackItem,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
