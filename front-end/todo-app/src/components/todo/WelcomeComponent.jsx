import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {
  retrieveHelloWorldBean,
  retrieveHelloWorldPathVariable,
} from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  //console.log(username)

  function callHelloWorldRestApi() {
    console.log("called");

    //axios
    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  //   retrieveHelloWorldPathVariable("Atinuke")
  //     .then((response) => successfulResponse(response))
  //     .catch((error) => errorResponse(error))
  //     .finally(() => console.log("cleanup"));
  // }

  function successfulResponse(response) {
    //console.log(response.data.message)
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
          Call Hello World REST API
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}
