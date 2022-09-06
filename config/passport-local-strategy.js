const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');


//authentication using passport
passport.use(new localStrategy({
    usernameField:"email"
} , function(email , password , done){
    //find the user and establish the identity
    User.findOne({email:email} , function(err , user){
        if(err){
            console.log('Error in finding the user --> Passport');
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null  , false);   //null = there is no user ---> and false = user not found 
        }

return done(null , user)   // user = user found  ---> null = no error

    });
} 
));


//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user , done){   //when user logs in an id generated which is stored in cookie . To store in cookie we need to encrypt the id which is done with the help of serialization(serializeUser).
   done(null , user.id);
});


// when the id in the cookie is sent back to the  browser for revalidation of user , the id needs to be decrypted which is done by deserialatization(deserializeUser)
passport.deserializeUser(function(id , done){
    User.findById(id , function(err , user){
        if(err){
            console.log('Error in finding the user ---> Passport');
            return done(err);
        }
        return done(null , user);
    });
});


module.exports = passport;
