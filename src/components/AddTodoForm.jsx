import { useState } from 'react';
import { addTodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

export const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
    }
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Add todo
        <input
          type="text"
          value={value}
          placeholder="Add todo.."
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
