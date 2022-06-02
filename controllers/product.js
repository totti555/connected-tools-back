// Import function from Product Model
import { getProducts, getLastGelsUpdate, getGelById,getGelNumber,getGelByMonth,getGelByIdAndMonth } from "../models/productModels.js";
 
// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            console.log("erreur");
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showLastGelsUpdate = (req, res) => {
    getLastGelsUpdate((err, results) => {
        if (err){
            console.log("erreur");
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGelById = (req, res) => {
    getGelById(req.params.idGel,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGelByMonth = (req, res) => {
    getGelByMonth(req.params.month,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGelByIdAndMonth = (req, res) => {
    getGelByIdAndMonth(req.params.idGel,req.params.month,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGelNumber = (req, res) => {
    getGelNumber((err, results) => {
        if (err){
            console.log("erreur");
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
