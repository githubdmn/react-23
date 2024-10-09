import { FaSpinner } from 'react-icons/fa';

function Spinner() {
  return (
    <div className="flex justify-center py-20">
      <FaSpinner className="animate-spin text-4xl" />
    </div>
  );
}
export default Spinner;