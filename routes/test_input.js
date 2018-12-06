process.env.MONGOLAB_URI = 'mongodb://localhost/FoodDB';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

require('../app.js');

describe('Test Story Routes', function (done) {

  // dump test database
  // after(function (done) {
  //   mongoose.connection.db.dropDatabase(function () {
  //     done();
  //   });
  // });

  it('should create a new story with a post request', function (done) {
    chai.request('http://localhost:3000')
    .get('/inputed')
    .query({Food_Name:'lui', Buy_Date: '1997-11-01', Expired_date: '19971-11-01', best_before_date: '1997-11-01',Food_type:'Meat' })
    .end(function (err, req) {
        console.log(req)
        expect(req.query.Food_Name).to.eql('lui');
      /*
      expect(req.body.Food_Name).to.eql('lui');
      expect(req.body.Buy_Date).to.be.an('1997-11-10T16:00:00.000Z');
      expect(req.body.Expired_date).to.eql('1997-11-10T16:00:00.000Z');
      expect(req.body.req.query.Food_type).to.be.an('Meat');
      expect(req.body.best_before_date).to.eql('1997-11-10T16:00:00.000Z');*/
      done();
    });
  });

});