import reactLogo from "./assets/react.svg";
import "./App.css";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import usePersons from "./hooks/usePersons";

function App() {
  const { data, loading, error } = usePersons();

  if (error) return <span style="color: red:">{error}</span>;
  return (
    <div className="App">
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
      <PersonForm />
    </div>
  );
}

export default App;
