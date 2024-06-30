const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
