const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now(),
        get: function(date) {
          return date.toLocaleString();
        }
      }
})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = { Blog }