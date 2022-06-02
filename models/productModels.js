// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
  db.query("SELECT * FROM gel", (err, results) => {
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
    "SELECT idGel, MAX(date) AS date, isEmpty,distributedDoses,notDistributedDoses FROM gel GROUP BY idGel",
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
    "SELECT * FROM gel WHERE idGel =?",
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
    "SELECT * FROM gel WHERE date LIKE ?",
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
    "SELECT * FROM gel WHERE idGel=? AND date LIKE ?",
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
  db.query("SELECT MAX(idGel) AS total FROM gel", (err, results) => {
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
