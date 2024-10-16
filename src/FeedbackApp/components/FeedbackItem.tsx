import Card from './Card';
import { FaTimes, FaEdit, FaSave} from 'react-icons/fa';
import { useContext, useState } from 'react';
import { FeedbackItemType } from '@/FeedbackApp/types';
import { FeedbackContext } from '../context';

function FeedbackItem(prop: FeedbackItemType) {
  const { deleteFeedbackItem, updateFeedbackItem } =
    useContext(FeedbackContext);

  // State to manage editing mode and the text being edited
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(prop.text); // Pre-fill with existing text

  // Function to handle save/update of feedback item
  const handleSave = () => {
    updateFeedbackItem(prop.id, {
      id: prop.id,
      text: newText, // Use the updated text from the input field
      rating: prop.rating,
    });
    setIsEditing(false); // Exit editing mode
  };

  return (
    <Card>
      <div className="num-display">{prop.rating}</div>

      {/* Delete button */}
      <button className="close" onClick={() => deleteFeedbackItem(prop.id)}>
        <FaTimes color="purple" />
      </button>

      {/* Edit button */}
      <button
        className="edit"
        onClick={() => setIsEditing(!isEditing)} // Toggle editing mode
      >
        <FaEdit color="blue" />
      </button>

      {/* If editing, show input field. Otherwise, show feedback text */}
      {isEditing ? (
        <div>
          <input
            type="text"
            className="text-input"
            value={newText} // Controlled input for new text
            onChange={(e) => setNewText(e.target.value)} // Update state on change
          />
          <button onClick={handleSave} className="btn-save">
            <FaSave color='green'/>
          </button>
        </div>
      ) : (
        <div className="text-display">{prop.text}</div>
      )}
    </Card>
  );
}

export default FeedbackItem;
