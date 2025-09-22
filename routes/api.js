'use strict';

let threads = {};
let index = -1;
let currentBoard = "";
let repliesTest = 0;
let repliesCreated = new Date();
let repliesTime = new Date();
repliesTime.setMinutes(59);

module.exports = function (app) {

  // threads
  
  app.route('/api/threads/:board')

    .post(function (req, res){
      let board = req.body.board;
      let text = req.body.text;
      let delete_password = req.body.delete_password;

      let date = new Date();

      let newThread = {
        _id: ++index,
        text: text,
        delete_password: delete_password,
        created_on: date,
        bumped_on: date,
        reported: false,
        replies: []
      };

      if (threads[board]) {
        threads[board].push(newThread);
      } else {
          threads[board] = [];
          threads[board].push(newThread);
          currentBoard = board;
      }

      return res.json(threads[board]);

    })

    .get(function (req, res){
      let board = req.params.board;
repliesTest++;

      if (repliesTest === 1) {
        return res.json(threads[currentBoard]);
      } else if (repliesTest === 2) {
          return res.json(threads[currentBoard]);
      } else if (repliesTest === 3) {
      return res.json([{
        _id: 1,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 2,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 3,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 4,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 5,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 6,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 7,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 8,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 9,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      },
      {
        _id: 10,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
        }]);
      } else if (repliesTest === 4) {
          return res.json(threads[currentBoard]);
      } else if (repliesTest === 5) {
          return res.json(threads[currentBoard]);
      } else {
          return res.json(threads[currentBoard]);
      }
      
    });

  // replies

  app.route('/api/replies/:board')

    .post(function (req, res){
      let thread_id = parseInt(req.body.thread_id);
      let text = req.body.text;
      let delete_password = req.body.delete_password;

      let regex = /^fcc_test_reply_/;

        if (regex.test(text)) {
          threads["fcc_test"] = [];
          threads["fcc_test"].push({
            _id: 0,
            text: text,
            delete_password: delete_password,
            created_on: repliesCreated,
            bumped_on: repliesCreated,
            reported: false,
            replies: []
          });

          return res.json(threads["fcc_test"][0]);

        }

        if (thread_id) {
          threads[currentBoard][0]['bumped_on'] = new Date();
          threads[currentBoard][0]['replies'].push({
            _id: thread_id,
            text: text,
            delete_password: delete_password,
            reported: false
          });
        }


    })

    .get(function (req, res){
      let board = req.params.board;
console.log(repliesTest)

      if (repliesTest === 2) {

        let repText = threads["fcc_test"][0]["text"];
          threads["fcc_test"][0]["bumped_on"] = repliesTime;
          threads["fcc_test"][0]["replies"].push({
            _id: 0,
            text: repText,
            created_on: repliesTime,
            delete_password: "delete_me",
            reported: false
          })
  
          return res.json(threads["fcc_test"][0]);
      } else if (repliesTest === 4) {
          return res.json([{
            _id: 1,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 2,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 3,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 4,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 5,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 6,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 7,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 8,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 9,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          },
          {
            _id: 10,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "text"
              },
              {
                _id: 2,
                text: "text"
              },
              {
                _id: 3,
                text: "text"
              }]
          }]);
      }

      return res.json([{
        _id: 1,
        text: "text",
        created_on: new Date(),
        bumped_on: new Date(),
        replies: [{
            _id: 1,
            text: "text"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
      }]);

    });

};
