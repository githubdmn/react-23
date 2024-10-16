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
      try {
        const feedbackData = await getFeedback();
        setFeedbackList(feedbackData);
      } catch (error) {
        console.error('Failed to fetch feedback:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteFeedbackItem = async (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        await deleteFeedback(id);
        // Optimistically update the state after deletion
        setFeedbackList((prevFeedbackList) =>
          prevFeedbackList.filter((item) => item.id !== id),
        );
      } catch (error) {
        console.error('Failed to delete feedback:', error);
      }
    }
  };

  const addFeedbackItem = async (newFeedback: FeedbackItemType) => {
    try {
      newFeedback.id = +customAlphabet(`1234567890`, 5)();
      await addFeedback(newFeedback);
      // Optimistically add to state after successful add
      setFeedbackList((prevFeedbackList) => [newFeedback, ...prevFeedbackList]);
    } catch (error) {
      console.error('Failed to add feedback:', error);
    }
  };

  const updateFeedbackItem = async (
    id: number,
    updatedFeedback: FeedbackItemType,
  ) => {
    try {
      await updateFeedback(id, updatedFeedback);
      // Optimistically update the feedback list
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.map((item) =>
          item.id === id ? { ...item, ...updatedFeedback } : item,
        ),
      );
    } catch (error) {
      console.error('Failed to update feedback:', error);
    }
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
