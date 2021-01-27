const express = require('express');
const router = express.Router();
const Cart = require("../models/cart.js");

router.post('/new',(req,res)=>{
    const newCart = new Cart({
        email : req.body.email
    });
    newCart.save()
    res.redirect("/about")
})
module.exports = router;