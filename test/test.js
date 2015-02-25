
var mongoose = require('mongoose');
var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;
var config = require('../config/config');
var Todo = require('../models/todo');

mongoose.connect(config.db);


function makeTitle(len){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < len; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  describe("tests update feature", function(){

    before(function(done) {
      mongoose.createConnection(config.db, function(error) {
        (error ? console.error('Error while connecting:\n%\n', error) : console.log('connected'));

        done(error);
      });
      randTitle = makeTitle(5);


    });



    it("should insert an update object", function(){
      var todo = new Todo({
        text: "test",
        author: randTitle

      });
      todo.save(function(err){
        if(err){
          console.log(err);
        }
        console.log("success");
      });

    });

    it("finds inserted object", function(){
      Todo.findOne(randTitle, function(err,todo){
        if(err){
          console.log(err);
        }
        should.exist(todo);
        console.log(todo);
      });

    });

  });
