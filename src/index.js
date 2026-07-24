const express = require("express");

const tapRoutes = require("./routes/tapRoutes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(tapRoutes);

app.listen(PORT, () => {

    console.log("EasyTap API iniciada.");

});