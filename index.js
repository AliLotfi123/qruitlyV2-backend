const express = require("express");
const app = express();

const loggerMiddleWare = require("morgan");
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const authMiddleWare = require("./auth/middleware");

const authRouter = require("./routers/auth");
const candidateRouter = require("./routers/candidates");
const messagesRouter = require("./routers/messages");
app.use("/", authRouter);
app.use("/candidates", candidateRouter);
app.use("/messages", messagesRouter);

const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
