const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getfortune,gethaircut,posthaircut,rate } = require('./controller');


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getfortune);
app.get("/api/haircut",gethaircut);
app.post("/api/haircut/:id",posthaircut);
app.get("/api/holidays",rate)
app.listen(4000, () => console.log("Server running on 4000"));
