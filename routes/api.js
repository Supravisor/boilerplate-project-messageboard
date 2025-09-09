'use strict';

let threads = {};
let index = -1;
let currentBoard = "";

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
      return res.json(threads[currentBoard]);
    });

  // replies

  app.route('/api/replies/:board')

    .post(function (req, res){
      let thread_id = parseInt(req.body.thread_id);
      let text = req.body.text;
      let delete_password = req.body.delete_password;

      threads[currentBoard][thread_id]['bumped_on'] = new Date();
      threads[currentBoard][thread_id]['replies'].push({
        _id: thread_id,
        text: text,
        delete_password: delete_password
      });

    });
  
};
