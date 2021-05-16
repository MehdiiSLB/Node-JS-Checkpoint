// npm i express nodemon uuid morgan helmet cors dotenv

// PACKAGES :
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const todoRouter = require("./api/todo/router");

// Pour utiliser les variables d'environnements
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2000;
// MIDDLEWARES :

// Pour lire les données en JSON
app.use(express.json());
// Pour afficher les requètes (détails) qui arrivent au server sur la console
app.use(morgan("combined"));

// Pour la sécurité
app.use(helmet());

// Pour le cross origin server error
app.use(cors());

let todos = [
  {
    id: 5,
    task: "todo 1",
    checked: false,
  },
  {
    id: 12,
    task: "todo 2",
    checked: true,
  },
];
// todo = {
//     id : ,
//     task : ,
//     checked :
// }

app.use("/todos", todoRouter);

app.listen(5000, () => console.log("Listening on http://localhost:" + 5000));
