//Describe tests
var mocha = require('mocha');
var assert = require('assert');
let mongooes = require("mongoose");

var FoodModel = require('../test_DB');
  
describe('Save records to DB', function() {

    // Save records
    it('Save foods', function(done){
        var food = new FoodModel ({
            Food_Name: 'Apple',
        });
        food.save().then(function () {
            assert(food.isNew === false);
        });
        done();
    });
});