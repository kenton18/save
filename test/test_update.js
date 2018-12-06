//Describe tests
var mocha = require('mocha');
var assert = require('assert');
let mongooes = require("mongoose");

var FoodModel = require('../test_DB');
var food;
// Create a food that ready for Read



before(function () {
    food = new FoodModel({
        Food_Name: '7UP',
    });
    food.save();
});

describe('Update a Record', function () {
    this.timeout(0);
    it('Change Drink name', function (done) {
        FoodModel.findOneAndUpdate(
            { Food_Name: '7UP' },
            { $set: { Food_Name: 'CocaCola' } },
            { returnOriginal: false },
            function (err, doc) {
                if (err) {
                    Console.log(err)
                }
                FoodModel.find(
                    { Food_Name: 'CocaCola' }
                    , function (result) {
                            if (result == 'CocaCola') {
                                assert(false);
                            }
                            done();
                        }
                    )
            }
        )
    })
});