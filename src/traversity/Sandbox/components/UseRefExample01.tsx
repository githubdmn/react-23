/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from 'react';

const UseRefExample01 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const paragrafRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      console.log(inputRef.current.value);
      // inputRef.current.value = 'Hello there';
      // inputRef.current.style.backgroundColor = 'green';
      paragrafRef.current!.innerText = inputRef.current.value;
    }
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          UseRefExample01
        </label>
        <br />
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={handleFocus} ref={paragrafRef}>
          use reference to a specific dom element
        </p>
      </form>
    </div>
  );
};
export default UseRefExample01;
