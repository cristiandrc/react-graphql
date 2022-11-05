import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login/graphql-queries";

const LoginForm = ({ notifyError, setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [login, result] = useMutation(LOGIN, {
    onError: (e) => notifyError(e.graphQLErrors[0]?.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { username, password } });
  };

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("phoneNumber-user-token", token);
    }
  }, [result.data]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username{" "}
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type="name"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
