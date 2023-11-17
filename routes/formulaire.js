var express = require("express");
var router = express.Router();

var {chercherMessages, enregistrerMessage} = require('../db/connexion');

router.post("/", function (req, res, next) {
  var email = req.body.contact_email;
  var name = req.body.contact_name;
  var message = req.body.contact_message;

  enregistrerMessage(name, email, message)
    .then((valeur) => {
      res.setHeader("Content-Type", "application/json");
      res.send(valeur);
    })
    .catch((error) => console.log(error));
});

module.exports = router;