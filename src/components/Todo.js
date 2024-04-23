import axios from "axios";
import React from "react";

const { REACT_APP_BACKEND_URL } = process.env;

function TodoItem(props) {
  const deleteTodoHandler = (title) => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/api/todo/${title}`)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="todo-item">
      <div className="todo-text">
        <p>
          <span style={{ fontWeight: "bold, underline" }}>
            {props.todo.title} :{" "}
          </span>{" "}
          {props.todo.description}
        </p>
      </div>
      <button
        onClick={() => deleteTodoHandler(props.todo.title)}
        className="btn btn-danger"
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
