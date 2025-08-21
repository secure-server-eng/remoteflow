const express = require("express");
const app = express();
const submitRequest = require("./routes/submitRequest");

app.use(express.json());
app.use("/submit-request", submitRequest);

app.listen(3000, () => console.log("Server running on port 3000"));
