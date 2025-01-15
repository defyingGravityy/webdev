const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!3')
}).post('/', (req, res) => {
  console.log("hey its a get request");
  res.send('Hello World post!')
}) //chaining of req

app.get("/index", (req, res) => {
  console.log("hey its index");
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api", (req, res) => {
  res.json({a:1,b:2})
})


app.listen(port, () => {
  console.log("hey its a post request");
  console.log(`Example app listening on port ${port}`)
})