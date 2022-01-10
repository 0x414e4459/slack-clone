import "./App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!state.user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar className="app_body_sidebar" />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element="welcom page" />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
