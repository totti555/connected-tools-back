// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
  db.query("SELECT idGel,DateGel AS date, estVide AS isEmpty, NbreDosesDistrib AS distributedDoses, NbreDosesNnDistrib AS notDistributedDoses FROM GEL", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getLastGelsUpdate = (result) => {
  db.query(
    "SELECT idGel, MAX(DateGel) AS date, estVide AS isEmpty,NbreDosesDistrib AS distributedDoses,NbreDosesNnDistrib AS notDistributedDoses FROM GEL GROUP BY idGel",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
//SELECT * FROM gel WHERE date LIKE '2022-05%'
export const getGelById = (idGel,result) => {
  console.log(idGel);
  db.query(
    "SELECT idGel, DateGel AS date, estVide AS isEmpty,NbreDosesDistrib AS distributedDoses,NbreDosesNnDistrib AS notDistributedDoses FROM GEL WHERE idGel =?",
    [idGel],
    (err, results) => {
      if (err) {
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getGelByMonth = (month,result) => {
  db.query(
    "SELECT idGel, DateGel AS date, estVide AS isEmpty,NbreDosesDistrib AS distributedDoses,NbreDosesNnDistrib AS notDistributedDoses FROM GEL WHERE DateGel LIKE ?",
    [month+'%'],
  // db.query(
  //   "SELECT * FROM gel WHERE idGel =?",
  //   [idGel],
    (err, results) => {
      if (err) {
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getGelByIdAndMonth = (idGel,month,result) => {
  if (idGel && month) {
  db.query(
    "SELECT idGel, DateGel AS date, estVide AS isEmpty,NbreDosesDistrib AS distributedDoses,NbreDosesNnDistrib AS notDistributedDoses FROM GEL WHERE idGel=? AND DateGel LIKE ?",
    [idGel,month+'%'],
    (err, results) => {
      if (err) {
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
  }
};

export const getGelNumber = (result) => {
  db.query("SELECT MAX(idGel) AS total FROM GEL", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
// Get Single Product
// export const getProductById = (id, result) => {
//     db.query("SELECT * FROM gel WHERE idGel = 1", [id], (err, results) => {
//         if(err) {
//             console.log("toto");
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results[0]);
//         }
//     });
// }
