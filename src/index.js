const express = require("express")
const app = express()

app.get("/ping", (req, res) => {
  res.send("pong!")
})

const port = 8080
app.listen(port, () => {
  console.log(`Website is running on http://localhost:${port}`)
})
