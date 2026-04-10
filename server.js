const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple chatbot logic
app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    let reply;

    if (userMessage.includes("hello")) {
        reply = "Hey! How can I help you?";
    } else if (userMessage.includes("price")) {
        reply = "Our services start from $10.";
    } else {
        reply = "I’m not sure, but I’m learning!";
    }

    res.json({ reply });
});

app.listen(3000, () => console.log("Server running on port 3000"));