import { useEffect, useRef, useState } from 'react';

const UseRefExample02 = () => {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
    console.log('renders', renders.current);
  }, [name]);

  return (
    <div>
      UseRefExample02
      <p>renders.current</p>
      <p>Prev name state: {renders.current}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-controll mb-3 bg-purple text-black"
      />
    </div>
  );
};

export default UseRefExample02;
