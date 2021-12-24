const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes/profile")

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.port || 8000;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/v1/profile", routes);

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
})