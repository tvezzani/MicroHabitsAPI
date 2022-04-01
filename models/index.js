const dbConfig = require("../config/database.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.goals = require("./goal.js")(mongoose);
module.exports = db;