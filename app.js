const express = require('express');
const app = express();
const cors=require('cors');

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { Blog } = require('./db/models');
app.use(cors());


// Load middleware
app.use(bodyParser.json());


app.get('/blogs',(req,res)=>{
    Blog.find({}).then((content)=>{
        res.send(content);
    }).catch((e)=>{
        res.send(e);
    })
});

app.post('/blogs',(req,res)=>{
    let title = req.body.title;
    let content = req.body.content;

    let newlist = new Blog({
        title,
        content
    });
    newlist.save().then((listdoc)=>{
        res.send(listdoc);
    })
});


// Define a route that takes an ID parameter and returns data
app.get('/blogs/:id', (req, res) => {
    Blog.findById({
        _id:req.params.id
    }).then((contentdata)=>{
        res.send(contentdata);
    })
  });


  app.delete('/blogs/:id', (req, res) => {
    Blog.findOneAndDelete({
        _id:req.params.id
    }).then((contentdata)=>{
        res.send(contentdata);
    })
  });





app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
});