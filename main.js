const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(expressValidator())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

const todos = [];

const completed = [];

app.get("/", function (req, res) {
  res.render('index', {
    todos: todos,
    completed: completed
  });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

app.post("/completed", function (req, res) {
  const remove = req.body.button
  todos.splice(todos.indexOf(remove), 1)
  completed.push(remove);
  res.redirect('/');
})


app.listen(3000, function() {
  console.log("it worked")
})
