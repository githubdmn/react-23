/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";


function FeedbackItemLocalExample() {

	const [rating, setRating] = useState(7);
	const [text, setText] = useState('Local level state example');

	
	const handleClick = () => {
		setRating(10);
		// setRating((previous) => previous + 1); // to access the previous state
		setText('This is a new text');
	}

	return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}


export default FeedbackItemLocalExample;