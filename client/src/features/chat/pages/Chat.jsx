import { useEffect, useState, useRef } from "react";
import socket from "../../services/socket.service";
import {
  joinChat,
  sendMessageSocket,
  onReceiveMessage,
  saveMessageToDB,
  getChatHistory,
  removeMessageListener,
} from "../../services/chat.service";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef(null);

  const userId = localStorage.getItem("userId");

  // ✅ Temporary — baad mein user list se aayega
  const [receiverId] = useState(() => {
    return (
      localStorage.getItem("receiverId") || prompt("Enter Receiver User ID")
    );
  });

  // 🔥 Socket connect + join room
  useEffect(() => {
    if (!userId) return;

    socket.connect();
    joinChat(userId);

    onReceiveMessage((msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      removeMessageListener();
      socket.disconnect();
    };
  }, [userId]);

  // 🔥 Load old messages
  useEffect(() => {
    if (!receiverId) return;

    const fetchMessages = async () => {
      try {
        const data = await getChatHistory(receiverId);
        setMessages(data);
      } catch (err) {
        console.error("Failed to load messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [receiverId]);

  // 🔥 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔥 Send message
  const sendMessage = async () => {
    if (!text.trim() || !receiverId) return;

    const msg = { senderId: userId, receiverId, message: text };

    sendMessageSocket(msg);
    await saveMessageToDB({ receiverId, message: text });

    setMessages((prev) => [...prev, msg]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>💬 Chat</h2>

      <div style={styles.chatBox}>
        {loading ? (
          <p style={{ color: "#888", textAlign: "center" }}>
            Loading messages...
          </p>
        ) : messages.length === 0 ? (
          <p style={{ color: "#888", textAlign: "center" }}>
            No messages yet. Say hi! 👋
          </p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              style={
                (msg.senderId || String(msg.sender)) === userId
                  ? styles.myMsg
                  : styles.otherMsg
              }
            >
              {msg.message}
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      <div style={styles.inputBox}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.btn}>
          Send 🚀
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f2027",
    minHeight: "100vh",
    color: "#fff",
  },
  header: { marginBottom: "10px" },
  chatBox: {
    height: "400px",
    overflowY: "scroll",
    background: "#1e1e2f",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  myMsg: {
    textAlign: "right",
    background: "#4caf50",
    color: "#fff",
    padding: "10px",
    margin: "5px",
    borderRadius: "12px",
  },
  otherMsg: {
    textAlign: "left",
    background: "#333",
    padding: "10px",
    margin: "5px",
    borderRadius: "12px",
  },
  inputBox: { display: "flex", gap: "10px" },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "none",
  },
  btn: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4caf50",
    color: "#fff",
    cursor: "pointer",
  },
};
