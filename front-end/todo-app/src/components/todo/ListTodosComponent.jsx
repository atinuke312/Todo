import { useEffect, useState } from "react";
import {
  deleteTodoApi,
  retrieveAllTodosForUsername,
} from "./api/TodoApiService";
import { ZonedDateTime, nativeJs } from "@js-joda/core";

export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  //   const todos = [
  //     { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
  //     {
  //       id: 2,
  //       description: "Learn Full Stack Dev",
  //       done: false,
  //       targetDate: targetDate,
  //     },
  //     { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  //   ];

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retrieveAllTodosForUsername("in28minutes")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteTodo(id) {
    console.log("clicked " + id);
    deleteTodoApi("in28minutes", id)
      .then(() => {
        setMessage(`Delete of todo with id = ${id} successful`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      {/* only show message if it is not null */}

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete Todo
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
