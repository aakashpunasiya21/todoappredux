import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from '../actions';
import { Button, Table } from "react-bootstrap";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleEdit = (todoId) => {
    const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
    dispatch(setUpdatingTodoIndex(todoIndex));
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  }

  const handleComplete = (event, todoId) => {
    dispatch(completeTodo({ todoId, completed: event.target.checked }));
  }

  return (
    <div className="container">  <hr />
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Decription</th>
          </tr>
        </thead>
        <tbody>
          {todos.records.map((todo) => (
            <tr key={todo.id}>
              <td>
                {todo.title}</td>
              <td>{todo.description}</td>
              <span>
                <Button className="btn-block" variant="outline-danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                <Button className="btn-block" variant="outline-primary" onClick={() => handleEdit(todo.id)}>Edit</Button>
                <label>
                  complete
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={(event) => handleComplete(event, todo.id)}
                  />
                </label>
              </span>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ul>
        {todos.records.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title}: {todo.description}
            </span>
            <span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <label>
                complete
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={(event) => handleComplete(event, todo.id)}
                />
              </label>
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
}