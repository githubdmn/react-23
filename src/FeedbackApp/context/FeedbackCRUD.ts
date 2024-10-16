import { FeedbackItemType } from "../types";

const feedbackApi = 'http://localhost:3001/feedback';
// package.json "proxy": "http://localhost:3001"
const feedbackApiSort = feedbackApi + '?_sort=rating&_order=desc';

async function getFeedback() {
  const response = await fetch(feedbackApiSort, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  
  return response.json();
}

async function addFeedback(newFeedback: FeedbackItemType) {
  const response = await fetch(feedbackApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFeedback),
  });
  return await response.json();
}

async function deleteFeedback(id: number) {
  const response = await fetch(feedbackApi + '/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

async function updateFeedback(id: number, updatedFeedback: FeedbackItemType) {
  const response = await fetch(`${feedbackApi}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFeedback),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
}

export { getFeedback, addFeedback, updateFeedback, deleteFeedback };
