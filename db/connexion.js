const MongoClient = require("mongodb-legacy").MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("yummynouilles");
const messagesCollection = db.collection("messages");
function chercherMessages() {
  return new Promise((resolve, reject) => {
    messagesCollection
      .findOne({})
      .then((result) => {
        resolve(JSON.stringify(result));
      })
      .catch((error) => {
        reject(error);
      });
  });
}
function enregistrerMessage(nom, email, message) {
  return new Promise((resolve, reject) => {
    var message = {
      nom: nom,
      email: email,
      message: message,
    };
    messagesCollection
      .insertOne(message)
      .then((result) => {
        resolve(JSON.stringify(result));
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
module.exports = { chercherMessages, enregistrerMessage };