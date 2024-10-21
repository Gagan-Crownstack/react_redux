import express from "express";
import bodyParser from "body-parser";
import { addUser,getUserByUsername } from "./data";

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Register Route
app.post("/api/user/register", (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existingUser = getUserByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists." });
  }

  const newUser = { username, password, email, createdAt: new Date() };
  addUser(newUser);

  res.status(201).json({ message: "User registered successfully", user: newUser });
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
