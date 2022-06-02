import mysql from "mysql2";

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "tlorthioir",
//     password: "totti",
//     database: "connected_tools"
//   });

const db = mysql.createConnection({
  host: "192.168.194.55",
  user: "distant",
  password: "password",
  database: "GEL"
});

if (db) {
  console.log("test");
}
  else console.log("erreur");

  export default db;