const host = "lallah.db.elephantsql.com";
const database = "cnoxfvfv";
const user = "cnoxfvfv";
const password = "UPwA85TeSH_5edwsWKWmgsjiy2_-F8xO";


const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}
const db = pgp(options);

module.exports = db;