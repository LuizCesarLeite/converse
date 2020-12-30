const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var index = require("./routes/index");
var falaUser = require("./routes/falauser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use("/", index);
app.use("/falauser", falaUser);
app.use(express.static(path.join(__dirname, "public")));

const port = 3847;

app.listen(port, 
    function() { 
        console.log(`Rodando fino na porta ${port}`) 
    }
);