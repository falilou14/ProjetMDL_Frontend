
const express = require('express')
const app = express()
const port = 3000


function main(){
app.get('/', (req, res) => {
  const currentDate = new Date();
  console.log("page called at" + currentDate);
  res.send('Hello World! Nous sommes le ' + currentDate);
})

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/page1.html")});


   // app.use(express.static("public"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

}

main();