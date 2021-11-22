import React from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTodo, addTodo, updateTodo } from '../actions';
import { useState } from 'react'

function TodoForm(props) {
  const { todo, updatingTodoIndex } = props.todos;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
    } else {
      props.updateTodo({ ...todo });
    }
  }


  return (
    <div className="container">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <FormControl type="text" name="title" value={todo.title} onChange={handleChangeInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={todo.description} onChange={handleChangeInput} rows={2} />
        </Form.Group>
        <Button variant="primary" type="submit"> {updatingTodoIndex ? 'Update' : 'Submit'}

        </Button>
      </Form>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input name="title" value={todo.title} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" value={todo.description} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <button type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</button>
        </div>
      </form> */}
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);