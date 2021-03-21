import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{ user }, disptach] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Feed />
          <Widgets />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
