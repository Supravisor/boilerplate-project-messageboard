'use strict';

let threads = [];

module.exports = function (app) {
  
  app.route('/api/threads/:board')

    .post(function (req, res){
      let board = req.body.board;
      let text = req.body.text;
      let delPassword = req.body.delete_password;
    })

    
  app.route('/api/replies/:board');

  
};
