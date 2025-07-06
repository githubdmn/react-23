import { JSX, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import './index.css';


export default function App01Counter(): JSX.Element {
  const [count, setCount] = useState(0);
  const navigate: NavigateFunction = useNavigate();

  const handleIncrement: () => void = (): void => {
    setCount((prevCount: number): number => prevCount + 1);
  };


  const handleDecrement: () => void  = (): void => {
    setCount((prevCount: number): number => prevCount - 1);
  };


  const handleReset: () => void = (): void => {
    setCount(0);
  };

  return (
    <div className="app01-counter-container animate-fade-in">
      <div className="app01-counter-card">
        <button
          onClick={(): void => navigate('/')}
          className="app01-counter-close-btn"
          aria-label="Close Counter App"
        >
          X
        </button>
        <h2 className="app01-counter-title">App01 Counter</h2>
        <p className="app01-counter-description">
          This is a simple counter application.
        </p>
        <div className="app01-counter-controls">
          <p className="app01-counter-display">{count}</p>
          <div className="app01-counter-btn-group">
            <button
              onClick={handleDecrement}
              className="app01-counter-btn app01-counter-btn-decrement"
            >
              Decrement
            </button>
            <button
              onClick={handleIncrement}
              className="app01-counter-btn app01-counter-btn-increment"
            >
              Increment
            </button>
          </div>
          <button
            onClick={handleReset}
            className="app01-counter-btn app01-counter-btn-reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
