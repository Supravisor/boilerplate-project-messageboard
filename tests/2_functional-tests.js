const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

      test('Creating a new thread: POST request to /api/threads/{board}', function(done) {
        chai.request(server)
          .post( '/api/threads/test' )
          .send( {
            "text": "new test",
            "delete_password": "del"
          } )
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isObject(res.body[0], 'response should be an object');
            assert.property(res.body[0], '_id', 'id number for thread');
            assert.property(res.body[0], 'delete_password', 'password');
            assert.property(res.body[0], 'text', 'thread text');
            assert.property(res.body[0], 'created_on', 'date thread created');
            assert.property(res.body[0], 'bumped_on', 'last date thread updated');
            assert.property(res.body[0], 'reported', 'did someone report an issue with the thread?');
            assert.property(res.body[0], 'replies', 'replies for the thread');
            done();
          });
      });

      test("Viewing the 10 most recent threads with 3 replies each: GET request to /api/threads/test", function(done) {
        chai
          .request(server)
          .get('/api/threads/test')
          .query({ _id: 1 })
          .end(function(err, res) {
            const { stockData } = res.body;
            assert.equal(res.status, 200);
            assert.isObject(res.body[0], 'response should be an object');
            assert.property(res.body[0], '_id', 'id number for thread');
            assert.property(res.body[0], 'delete_password', 'password');
            assert.property(res.body[0], 'text', 'thread text');
            assert.property(res.body[0], 'created_on', 'date thread created');
            assert.property(res.body[0], 'bumped_on', 'last date thread updated');
            assert.property(res.body[0], 'reported', 'did someone report an issue with the thread?');
            assert.property(res.body[0], 'replies', 'replies for the thread');
          });
          done();
    });

});
