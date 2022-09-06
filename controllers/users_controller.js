module.exports.profile = function(req , res){
    res.end('<h1>User Profile</h1>');
}

//render the sign Up page 
module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
        title:"Codeial | Sign Up"
    });
}


//render the sign in paage
module.exports.signIn = function(req , res){
    console.log('hello')
    return res.render('user_sign_in' , {
        title:"Codeial | Sign in"
    });
}

//get the sign up data
module.exports.create = function(req , res){
// TODO later
}

//sign in and create session for the user
module.exports.createSession = function(req , res){
    // TODO later
}