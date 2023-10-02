import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title}
      </label>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
