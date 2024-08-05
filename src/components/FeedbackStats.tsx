import { FeedbackListProps, FeedbackProps } from "@/types";


function FeedbackStats(props: FeedbackListProps) {
	const average: number =
    props.feedback.reduce((accumulative: number, current: FeedbackProps) => {
      return accumulative + current.rating;
    }, 0) / props.feedback.length;
	const averageStr = average.toString().replace(/[.,]0$/, '');
	return (
    <div className="feedback-stats">
      <h4>{props.feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : averageStr}</h4>
    </div>
  );
}

export default FeedbackStats;