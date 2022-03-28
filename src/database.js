const mysql = require("mysql2");
var fs = require('fs');
let db_con  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Qwerty@1234',
    database: 'apidb'
});

let output;
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
      return;
    }
  
    console.log("We are connected to gfg_db database");
  
    // Here is the query

    var result = "SELECT * FROM apidb.users";
    db_con.query(result, (err, rows) => {
        if(err) throw err;
        fs.writeFile('table.json', JSON.stringify(rows) , function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        setOutput(rows);
    });

});

