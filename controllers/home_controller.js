module.exports.home = function(req , res){
   
   return res.render('home' , {
    title:"Home"
   });
   // console.log('home')
   // return res.end('home')
   
}