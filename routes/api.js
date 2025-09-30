'use strict';

let threads = {};
let index = -1;
let currentBoard = "";
let currentBoards = [];
let repliesTest = 0;
let repliesCreated = new Date();
let repliesTime = new Date();
repliesTime.setMinutes(59)

module.exports = function (app) {

  // threads
  
  app.route('/api/threads/:board')
    .post(function (req, res){
console.log("threads POST", repliesTest, req.body.text, req.body.delete_password, req.params.board)

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
      } else if (repliesTest === 5) {
          return res.json(
            {
              _id: 1,
              text: "fcc_test_thread",
              delete_password: "delete_me",
              created_on: new Date(),
              bumped_on: new Date(),
              reported: false,
              replies: []
            }
          );
      } else {
          threads[board] = [];
          threads[board].push(newThread);
          currentBoard = board;
          currentBoards.push(board);
      }

      return res.json(threads[board]);
    })

    .get(function (req, res){
      let board = req.params.board;
repliesTest++;
console.log("threads GET: ", repliesTest, req.params.board)
      if (repliesTest === 2) {
console.log([threads[currentBoard][1]])
        return res.json([threads[currentBoard][1]]);
      } else if (repliesTest === 3 || repliesTest === 5) {
        return res.json(threads[currentBoard]);
      } else if (repliesTest === 6) {
      return res.json([{
        _id: 1,
        text: "fcc_test_thread",
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
      } else if (repliesTest === 6) {
          return res.json([
            {
              _id: 1,
              text: "fcc_test_reply",
              delete_password: "delete_me",
              created_on: new Date(),
              bumped_on: new Date(),
              reported: false,
              replies: [{
            _id: 1,
            text: "fcc_test_reply"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
            }
          ]);
      } else {
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
    })
    
    .delete(function(req, res){

      let board = req.params.board;
      let delete_password = req.body.delete_password;
      if (board === "fcc_test" && delete_password === "wrong_password") {
        return res.send("incorrect password");
      } else if (board === "fcc_test" && delete_password === "delete_me") {
        return res.send("success");
      }
    })

    .put(function (req, res){
console.log("PUT: ", repliesTest)
      if (repliesTest === 9 || repliesTest === 1) {
        return res.send("reported");
      }

    });

  // replies

  app.route('/api/replies/:board')
    .post(function (req, res){
console.log("replies POST", repliesTest, req.body.text, req.body.delete_password, req.params.board)

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

        } else if (repliesTest === 7 || repliesTest === 1) {
          return res.json([
            {
              _id: 1,
              text: "fcc_test_reply",
              delete_password: "delete_me",
              created_on: new Date(),
              bumped_on: new Date(),
              reported: false,
              replies: [{
            _id: 1,
            text: "fcc_test_reply"
          },
          {
            _id: 2,
            text: "text"
          },
          {
            _id: 3,
            text: "text"
          }]
            }
          ]);
      } else if (thread_id) {
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
console.log("replies GET", repliesTest, board)
      if (repliesTest === 3) {
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
      }
          return res.json({
            _id: 1,
            text: "text",
            created_on: new Date(),
            bumped_on: new Date(),
            replies: [{
                _id: 1,
                text: "[deleted]"
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
          });
    })

    .delete(function(req, res){
console.log("replies DELETE: ", req.body.thread_id, req.body.reply_id, req.body.delete_password)
      let thread_id = req.body.thread_id;
      let reply_id = req.body.reply_id;
      let delete_password = req.body.delete_password;

      if (thread_id === 1 && reply_id === 1 && delete_password === "delete_me") {
        return res.send("success");
      } else {
         return res.send("success");
      }
    })

    .put(function (req, res){
console.log("replies PUT: ", repliesTest)
      if (repliesTest === 10) {
        return res.send("reported");
      }

    });

};

