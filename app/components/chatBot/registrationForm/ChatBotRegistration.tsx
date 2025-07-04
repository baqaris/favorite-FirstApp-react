"use client";
import { useState } from "react";
import styles from "./ChatBot.module.css"; // ✅ ეს მნიშვნელოვანია!

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    const lowerInput = input.toLowerCase();
    let botReply = "ბოდიში, ვერ მივხვდი. სცადე სხვა შეკითხვა.";

    if (lowerInput.includes("როგორ უნდა დავრეგისტრირდე")) {
      botReply = "შეავსე ყველა ველი და დააჭირე 'რეგისტრაცია' ღილაკს.";
    } else if (lowerInput.includes("ელფოსტა") || lowerInput.includes("იმეილი")) {
      botReply = "შეიყვანე მოქმედი ელფოსტა, მაგ: example@gmail.com";
    } else if (lowerInput.includes("პაროლი")) {
      botReply = "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს.";
    } else if(lowerInput.includes("რა გქვია?")){
        botReply = "ნუ გამიხურე საქმე გააგრძელე რეგისტრაცია <3";
    }

    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const close = "X"

  return (
    <div className={styles.chatbotWrapper}>
      <button className={styles.ChatBotton} onClick={handleToggle}>{isOpen ? close : "ChatBot 🤖"}</button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatMessages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="დაწერე კითხვა ..."
            />
            <button  onClick={handleSend}>გაგზავნა</button>
          </div>
        </div>
      )}
    </div>
  );
}
