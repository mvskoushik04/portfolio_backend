require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chatRoutes = require("../routes/chat");

const app = express();

app.use(cors({
  origin: ["https://portfoliofrontendcode-a1frmf3ha-koushiks-projects-5c01a8dc.vercel.app/"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

module.exports = app;