const express = require('express');
const router = express.Router();
const Newsletter = require("../models/newsletter.js");

router.post('/new',(req,res)=>{
    const newNewsletter = new Newsletter({
        email : req.body.email
    });
    newNewsletter.save()
    res.redirect("/about")
})
module.exports = router;