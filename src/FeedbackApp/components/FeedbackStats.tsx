import { useContext } from "react";
import { FeedbackContext } from "../context";

type FeedbackItemType = { id: number; text: string; rating: number };

function FeedbackStats() {

  const { feedbackList } = useContext(FeedbackContext);

	const average: number =
    feedbackList.reduce((accumulative: number, current: FeedbackItemType) => {
      return accumulative + current.rating;
    }, 0) / feedbackList.length;
	const averageStr = average.toString().replace(/[.,]0$/, '');
	return (
    <div className="feedback-stats">
      <h4>{feedbackList.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : averageStr}</h4>
    </div>
  );
}

export default FeedbackStats;