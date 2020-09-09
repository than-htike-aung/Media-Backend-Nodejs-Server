

require('dotenv').config();

let express = require('express'),
    app = express();


    app.listen(process.env.PORT, ()=>{
        console.log(`Server starting at ${process.env.PORT}`)
     })