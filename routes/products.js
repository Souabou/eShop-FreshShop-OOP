const express = require('express');
const router = express.Router();
const Products = require("../models/product.js");

router.get('/shop', (req,res)=>{
    Products.find({}, (err, products)=> {
        res.render('shop.ejs', {
            
            products: products});

    })
    
});
module.exports = router;