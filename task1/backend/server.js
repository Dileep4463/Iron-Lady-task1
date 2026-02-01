const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const msg = req.body.message.toLowerCase();

    // Default reply
    let reply = "I can help you with Iron Lady programs!";

    if (msg.includes("program")) {
      reply =
        "Iron Lady offers fitness transformation programs, mindset coaching, and structured training plans designed for women's empowerment.";
    } else if (msg.includes("join")) {
      reply =
        "You can join through the Iron Lady website by filling the enrollment form and selecting your preferred program.";
    } else if (msg.includes("pricing") || msg.includes("cost")) {
      reply =
        "Pricing depends on the program you choose. You can find all details on the Iron Lady website.";
    } else if (msg.includes("duration")) {
      reply =
        "Program duration varies from 4 weeks to 12 weeks depending on the course selected.";
    } else if (msg.includes("trainer")) {
      reply =
        "All programs are guided by certified trainers with experience in women's fitness and empowerment.";
    }

    res.json({ reply });
  } catch (error) {
    console.error("🔥 DEMO ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
