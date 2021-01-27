const express = require("express");
const router = express.Router();
const app = express();
//passport import  -> POST
const passport = require('passport');
require("./config/passport")(passport)

//mongoose
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
//mongoose
mongoose.connect('mongodb+srv://Project-Freshshop-OOP-Becode:DiogoHeinen@cluster0.kpol0.mongodb.net/Project-Freshop-OOP-Becode?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

// related to css connection + bewteen pages
app.use("/static", express.static("public"));

//BodyParser
app.use(express.urlencoded({ extended: false }));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
   }));
   app.use(passport.initialize());
   app.use(passport.session());
   //use flash
   app.use(flash());
   app.use((req,res,next)=> {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error  = req.flash('error');
   next();
   })

//ROUTES
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/newsletters',require('./routes/newsletters'));
app.use('/carts',require('./routes/carts'));
app.use('/products',require('./routes/products'));

// EJS©
// view engine configuration
app.set("view engine", "ejs");
app.use(expressEjsLayout);


// GET METHOD 
app.get('/',(req, res) => {
    res.render('index.ejs');
});

app.get('/about',(req, res) => {
    res.render('about.ejs');
});   

app.get('/cart',(req, res) => {
    res.render('cart.ejs');
});   

app.get('/checkout',(req, res) => {
    res.render('checkout.ejs');
}); 

app.get('/contact-us',(req, res) => {
    res.render('contact-us.ejs');
});  

app.get('/gallery',(req, res) => {
    res.render('gallery.ejs');
});   

app.get('/index',(req, res) => {
    res.render('index.ejs');
}); 

app.get('/my-account',(req, res) => {
    res.render('my-account.ejs');
});

app.get('/shop-detail',(req, res) => {
    res.render('shop-detail.ejs');
});   

app.get('/shop',(req, res) => {
    res.render('shop.ejs');
});  

app.get('/wishlist',(req, res) => {
    res.render('wishlist.ejs');
}); 
  
// // POST METHOD
// app.post('/',(req, res) => {
//     console.log(req.body);
//     });



app.listen(3000, () => console.log("Server Up and running"));

