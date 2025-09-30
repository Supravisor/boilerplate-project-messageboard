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

      test('Deleting a thread with the incorrect password: DELETE request to /api/threads/{board} with an invalid delete_password', function(done){
        chai.request(server)
          .delete( '/api/threads/fcc_test' )
          .send( {
            "board": "fcc_test",
            "delete_password": "wrong_password"
          } )
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isString(res.text, 'response should be a string');
            assert.include(res.text, 'incorrect password', 'reponse should include an invalid result');
            done();
          });
      });

      test('Deleting a thread with the correct password: DELETE request to /api/threads/{board} with an invalid delete_password', function(done){
        chai.request(server)
          .delete( '/api/threads/fcc_test' )
          .send( {
            "board": "fcc_test",
            "delete_password": "delete_me"
          } )
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isString(res.text, 'response should be a string');
            assert.include(res.text, 'success', 'reponse should include a valid result');
            done();
          });
      });

      test('Reporting a thread', function(done){
        chai.request(server)
          .put( '/api/threads/fcc_test' )
          .send( {
            "_id": 1
          } )
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isString(res.text, 'response should be a string');
            assert.include(res.text, 'reported', 'response should indicate if the thread is reported');
            done();
          });
      });

      test('Creating a new thread: POST request to /api/threads/{board}', function(done) {
        chai.request(server)
          .post( '/api/replies/test' )
          .send( {
            "_id": 1,
            "text": "new reply text",
            "delete_password": "pass"
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

      test("Viewing a single thread with all replies: GET request to /api/replies/{board}", function(done) {
        chai
          .request(server)
          .get('/api/replies/test')
          .query({ _id: 1 })
          .end(function(err, res) {
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

      test('Deleting a thread with the incorrect password: DELETE request to /api/threads/{board} with an invalid delete_password', function(done){
        chai.request(server)
          .delete( '/api/replies/fcc_test' )
          .send( {
            "board": "fcc_test",
            "delete_password": "wrong_password"
          } )
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.isString(res.text, 'response should be a string');
            assert.include(res.text, 'incorrect password', 'reponse should include an invalid result');
            done();
          });
      });

});
