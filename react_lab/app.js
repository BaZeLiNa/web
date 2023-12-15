const express = require("express");
const cors = require("cors");

const carRouter = require("./routes/car.routes");
const app = express();
const port = 8080;

app.use(cors());

app.use("/api", carRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
