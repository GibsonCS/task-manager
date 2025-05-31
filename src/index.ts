import express from "express";

const server = express();
const PORT = 3000;

server.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});

server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
