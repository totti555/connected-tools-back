import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "tlorthioir",
    password: "totti",
    database: "connected_tools"
  });
if (db) {
  console.log("test");
}
  else console.log("erreur");

  export default db;