require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Innovative Collage is running...");
});

app.listen(port, () => {
   console.log(`Innovative Collage is running on ${port}`)
})
