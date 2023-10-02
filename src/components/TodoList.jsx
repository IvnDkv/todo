import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';
export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};
