import "./styles.css";
import { useState } from "react";
import Layout from "./components/Layout";
import { AppContext } from "./AppContext";

export default function App() {
  const [conPass, setConPass] = useState(0);
  return (
    <div className="App">
      <h1>
        Hello CodeSandbox
        <br />
        {conPass}
      </h1>
      <AppContext.Provider value={{ conPass, setConPass }}>
        <Layout navbar="1" content="content content." />
      </AppContext.Provider>
    </div>
  );
}
