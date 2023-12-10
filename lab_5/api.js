const express = require('express')
const bookRouter = require('./routes/book_routes')
const PORT = process.env.PORT || 3030

const app = express()

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(express.json())
app.use("/api",bookRouter);

app.get("", (req, res) => {
  res.sendFile(__dirname +'/views/index.html');
});


app.listen(PORT, ()=>console.log(`server work on ${PORT}`))