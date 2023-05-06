
const express = require("express");
const app = express();
const port = 3000;


function main(){

    app.use(express.static("public"));

    app.listen(port, () => {
        console.log(` app listening on port ${port}`);
    });

}

main();

