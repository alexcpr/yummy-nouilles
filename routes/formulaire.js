var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  var email = req.body.contact_email;
  var name = req.body.contact_name;
  var message = req.body.contact_message;

  res.send("email: " + email + ", name: " + name + ", message: " + message);
});

module.exports = router;