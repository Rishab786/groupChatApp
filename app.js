const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const loginRouter = require("./routes/login");
const messageRouter = require("./routes/message");
const chatsRouter = require("./routes/chats");
const app = express();
const PORT = 8085;
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/login", loginRouter);
app.post("/message", messageRouter);
app.post("/", chatsRouter);
app.use((req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log("server started");
});
