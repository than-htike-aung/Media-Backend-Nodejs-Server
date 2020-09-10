

require('dotenv').config();

let express = require('express'),
    app = express();

    const cat = require('./database/cat');

// let catObj = {
//     id:2,
//     name:'Computer',
//     image:'computer.png',
//     since:Date.now()
// }

// cat.save(catObj)
//     .then(res=>console.log(res))
//     .catch(err=> console.log(err));

//Retrieve data
// cat.all()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

// let obj ={
//     id: '5f59098f52e4791eb045e4a8',
//     name: "Car"
// }

// cat.update(obj)
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// cat.destroy('5f590a9a2e5a4a11b4276bdc')
//     .then(res=>console.log(res))
//     .catch(err=> console.log(err));

const seeder = require('./database/seeder');

seeder.seedCat()
.then(res=>console.log(res))
.catch(err=>console.log(err))

    app.listen(process.env.PORT, ()=>{
        console.log(`Server starting at ${process.env.PORT}`)
     })