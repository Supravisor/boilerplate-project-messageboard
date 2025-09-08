'use strict';

let threads = {};
let index = -1;

module.exports = function (app) {
  
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
      }

      return res.json(threads[board]);

    })

  app.route('/api/replies/:board');

  
};
