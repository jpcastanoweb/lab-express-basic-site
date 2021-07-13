/* 
    1. IMPORTACIONES
*/

const express = require("express")
const app = express()

/* 
    2. MIDDLEWARES
*/

app.use(express.static("public"))
app.set("view engine", "hbs")

/* 
    3. ROUTES
*/

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/works", (req, res) => {
  res.render("works")
})

app.get("/gallery", (req, res) => {
  res.render("gallery")
})

/* 
    4. SERVER
*/

app.listen("3000", () => {
  console.log("running on port 3000")
})
