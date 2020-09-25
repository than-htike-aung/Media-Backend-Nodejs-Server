
require('dotenv').config();

let express = require('express'),
    app = express(),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    User = require('./database/user'),
    path = require('path'),
    cors = require('cors'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('./database/db');
let seeder = require('./database/seeder');
let Order = require('./database/order');

//seeder.seedCat();
//seeder.seedProduct();

//for drop Collection
// db.dropColle('categories')
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

// let orderObj = {
//     'uid' :1,
//     'ords': JSON.stringify({97:2, 102:2,670:3,770:2})
// }
// Order.save(orderObj)
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// Order.findOrderById(2)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET;

let myStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
   let email = payload.email;
   let name = payload.name; 
    User.findByEmail(email)
        .then(user=>{
            if(user.name == name){
                done(null, user);
            }
        })
        .catch(err =>done(err,null));


});

let userRoute = require('./routes/user')(express, jwt);
let adminRoute = require('./routes/admin')(express,passport);
let guestRoute = require('./routes/guest')(express)

app.use(express.static(path.join(__dirname, './assets')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/",guestRoute);
passport.use(myStrategy)

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus:200
}


app.use(cors(corsOptions));

    
    app.listen(process.env.PORT, ()=>{
        console.log(`Server starting at ${process.env.PORT}`)
     })
 //   const cat = require('./database/cat');
  //  const product = require('./database/product')
  //  const seeder = require('./database/seeder')

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

// let obj = {
//     "cat_id" :1,
//     "name": "Car",
//     "price" : 3000,
//     "image": "cc.png",
//     "description": "No Desc",
// }

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

// product.paginate(5, 50)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

//const User = require('./database/user');

// let userObj = {
//     "name" : "Phoe Htet",
//     "email" : "ph@gmail.com",
//     "password": "123"
// }

// User.save(userObj)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

// User.all()
//     .then(res=>console.log(res))
//       .catch(err=>console.log(err))

//  User.findUserById("5f61c68f0142f110f4c0d24e")
//     .then(res=>console.log(res))
//       .catch(err=>console.log(err))

    //    User.findByEmail("ph@gmail.com")
    //     .then(res=>console.log(res))
    //     .catch(err=>console.log(err))

//const Gallery = require('./database/gallery');

// let galleryObj = {
//     "name" : "coder.png"
// }

// Gallery.save(galleryObj)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

//  Gallery.all()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

//const passgen = require('./helper/passgen');

// let pass = "123";

// passgen.encrypt(pass)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

