let mongoose = require('mongoose');

//Article schema
let articleschema = mongoose.Schema({
  title:{
    type : String,
    required :true
  },
  author:{
    type : String,
    required :true
  },
  body:{
    type : String,
    required :true
  }

});
 let Articles = module.exports = mongoose.model('article',articleschema);
