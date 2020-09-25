const { json } = require('body-parser');
let db = require('./db');
let Order = db.Order;
let Product = require('./product');

let save = (obj) =>{
    return new Promise((resolve, reject) => {
        obj['since'] = Date.now();
        let order = new Order(obj);
        order.save((err, data) =>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

let findOrderById = (id)=>{
    return new Promise((resovle, reject)=>{
        Order.findById(id,(err,data)=>{
            if(err){
                reject(err);
            } else{
                let ords = JSON.parse(data.ords);
                let products = [];
                let i = 0;
                for (let key in ords){
                    Product.findProuctById(key)
                        .then(res =>{
                            i++;
                            products.push(res);
                            if(i == Object.keys(ords).length){
                                resovle(products);
                            }
                        })
                        .catch(error =>console.log(error));
                }
            }
           // resovle(JSON.parse(data.ords));
        })
    })
}

module.exports = {
    save,
    findOrderById
}