import express from "express";
import morgan from "morgan";
import todos from "./routes/todo.js";

const port = 8080;
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/todo", todos);

app.listen(port, () => {
  console.log(`todo server running on port ${port}`);
});
