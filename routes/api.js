'use strict';

let threads = [];
let index = -1;

module.exports = function (app) {
  
  app.route('/api/threads/:board')

    .post(function (req, res){
      let board = req.body.board;
      let text = req.body.text;
      let delete_password = req.body.delete_password;
    })

    
  app.route('/api/replies/:board');

  
};
