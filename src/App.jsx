import reactLogo from "./assets/react.svg";
import "./App.css";
import PersonForm from "./PersonForm";
import PhoneForm from "./PhoneForm";
import Persons from "./Persons";
import usePersons from "./hooks/usePersons";
import { useState } from "react";
import Notify from "./Notify";

function App() {
  const { data, loading, error } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  if (error) return <span style="color: red:">{error}</span>;

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };
  return (
    <div className="App">
      {errorMessage && <Notify errorMessage={errorMessage} />}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <h1>GraphQL + React</h1>
          <Persons persons={data.allPersons} />
        </>
      )}
      <PersonForm notifyError={notifyError} />
      <PhoneForm notifyError={notifyError} />
    </div>
  );
}

export default App;
