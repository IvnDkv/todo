import { useDispatch } from 'react-redux';
import { toggleComplete, toggleUpdate, deleteTodo } from '../redux/todoSlice';
import { useState } from 'react';

export const TodoItem = ({ id, title, completed }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(toggleUpdate({ id, title: value }));
    setEdit((prev) => !prev);
  };
  const handleEdit = () => {
    setValue(title);
    setEdit((prev) => !prev);
  };
  return (
    <li>
      {edit ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleChange}
              disabled={edit}
            />
            {title}
          </label>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};
