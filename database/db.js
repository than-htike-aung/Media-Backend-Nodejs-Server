const mongoose = require('mongoose');
let url = "mongodb://localhost:27017/mediaDB"
const connect = mongoose.connect(url, {useNewUrlParser: true});

let Schema = mongoose.Schema;

let CatScheme = new Schema({
    id : {type:Number, require:true},
    name: {type:String, require:true},
    image: {type:String, require:true},
    since: {type:Date, require:true}
});

let Cat = mongoose.model('category', CatScheme);

module.exports = {
    Cat
}