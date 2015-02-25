var Todo = require('../models/todo.js');
module.exports= function(app){
  app.get('/', function(req,res){
    res.send(200);
  });

  app.post('/create',function(req,res){
    console.log(req.body);

    var todo = new Todo({id:req.body.id,
      text: req.body.text,
      author: req.body.author

    });
    // console.log(req.body.about);
    todo.save(function(err){
      if(err){
        res.send("500");
      }
      res.send("200");
    });
  });

  app.get('/all', function(req,res){
    Todo.find(function(err, events){
      if(err){
        res.send(err);
      }
      res.json(events);
    });
  });

  app.get('/find/author/:author',function(req,res){
    Todo.findOne(req.params.author, function(err,user){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  });

};
