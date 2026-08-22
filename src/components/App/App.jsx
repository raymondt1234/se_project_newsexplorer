import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<h1>Main</h1>} />
          <Route path="/saved-news" element={<h1>Saved articles</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
