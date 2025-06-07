import React, { useState, useMemo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import confetti from "./confetti.mp4";
import hearts from "./hearts.mov";
import happy from "./happy.png";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "RamboAndNav" && password === "iLoveYou") {
      setIsLoggedIn(true);
      setError("");
    } else {
      toast.error("Theek se type krlo 🥺", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const useTypewriter = (text, speed = 20) => {
    const [index, setIndex] = useState(0);
    const displayText = useMemo(() => text.slice(0, index), [index]);
    useEffect(() => {
      if (index >= text.length) return;

      const timeoutId = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [index, text, speed]);

    return displayText;
  };

  const loginText = useTypewriter("Hi, my love 💗", 100);

  return (
    <div>
      <ToastContainer theme="dark" />
      {!isLoggedIn ? (
        <div className="login">
          <video src={hearts} autoPlay muted loop className="hearts" />
          <div className="login-container">
            <h2>{loginText}</h2>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
            <button onClick={handleLogin} className="login-btn">
              Lezzgoooo
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="main-section">
            <video src={confetti} autoPlay muted loop className="confetti" />
            <img src={happy} className="bday-image" />
          </div>
          <div className="second-section">
            <div className="left-second">hi</div>
            <div className="right-second">hi</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
