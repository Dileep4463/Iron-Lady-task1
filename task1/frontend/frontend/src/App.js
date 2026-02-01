import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const aiMsg = { text: data.reply, sender: "ai" };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="chat-container">
      <h1>Iron Lady Assistant</h1>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
