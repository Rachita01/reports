const mysql = require("mysql2");
  
let db_con  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Qwerty@1234',
    database: 'apidb'
});
  
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
      return;
    }
  
    console.log("We are connected to gfg_db database");
  
    // Here is the query
    let query = "SELECT * FROM apidb.users";
  
    db_con.query(query, (err, rows) => {
        if(err) throw err;
  
        console.log(rows);
    });
});