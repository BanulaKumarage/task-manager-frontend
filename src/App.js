import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoView from "./components/TodoListView";

const { REACT_APP_BACKEND_URL } = process.env;

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    console.log(REACT_APP_BACKEND_URL);
    axios.get(`${REACT_APP_BACKEND_URL}/api/todo`).then((res) => {
      setTodoList(res.data);
    });
  });

  const addTodoHandler = () => {
    axios
      .post(`${REACT_APP_BACKEND_URL}/api/todo`, {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">Task Manager</h1>
        <h6 className="card-subtitle">Simple Todo application</h6>
        <div className="card-body">
          <h5 className="card-title">Add Your Task</h5>
          <div className="input-field">
            <input
              className="form-control"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div className="input-field">
            <input
              className="form-control"
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Description"
              required
            />
          </div>
          <button className="btn btn-primary" onClick={addTodoHandler}>
            Add Task
          </button>
          <h5 className="card-title">Your Tasks</h5>
          <div>
            <TodoView todoList={todoList} />
          </div>
        </div>
        <h6 className="card-subtitle">
          Copyright 2024, All rights reserved &copy;
        </h6>
      </div>
    </div>
  );
}

export default App;
