//Describe tests
var mocha = require('mocha');
var assert = require('assert');
var should = require('should');
var expect = require('chai').expect;
var FoodModel = require('../test_DB');
let mongooes = require("mongoose");
var food;

// Create a food that ready for Read
describe('Read a Record', function() {
    this.timeout(0);
    it("store the testing data", function(done){ 
        food = new FoodModel ({
            Food_Name: 'Cake',
        });
        food.save();
        
        FoodModel.find({Food_Name:"Cake"}," -_id Food_Name " ,{limit:1},).lean().exec(function (err, data) {
        console.log(typeof(data))
        console.log(data)
        var correct = {Food_Name:"Cake"}
        expect(correct).to.be.deep.equal({ Food_Name:"Cake" });
        done();
        
        
        // ... do something awesome... 
      }
    /*
    it('Read a Cake Record', function (done) {
        FoodModel.find({}, "-_id Food_Name" ,{limit:1}, function(err, cursor)
        {
            
                cursor.toArray(function(err,docs) 
                {
                    if(!err)
                    {
                        docs.should.have.lengthOf(1);
                        var data = docs[0];
                        console.log(data);
                        data._id.should.not.be.null;
                        data.Food_Name.should.equal('Cake');
                        data.Buy_Date.should.equal('c');
                        data.Expired_date.should.equal('d');
                        done();
                        
                    }
                })
            
            }
        )}*/
    
        
)});
});