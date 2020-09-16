

require('dotenv').config();

let express = require('express'),
    app = express();

    const cat = require('./database/cat');
    const product = require('./database/product')
    const seeder = require('./database/seeder')

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


/* Database  Seeding method
const seeder = require('./database/seeder');

seeder.seedCat()
.then(res=>console.log(res))
.catch(err=>console.log(err))

*/

// For Product

let obj = {
    "cat_id" :1,
    "name": "Car",
    "price" : 3000,
    "image": "cc.png",
    "description": "No Desc",
}

// product.save(obj)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

// product.all(obj)npm i mongoose-paginate
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

// product.destroy(1)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// seeder.seedProduct()
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// cat.getPost("id","cat_id","products")
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

product.paginate(5, 50)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    app.listen(process.env.PORT, ()=>{
        console.log(`Server starting at ${process.env.PORT}`)
     })