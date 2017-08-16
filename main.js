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

app.get("/", function(req, res) {
  res.render("index", {
  })
})






app.listen(3000, function() {
  console.log("it worked")
})
