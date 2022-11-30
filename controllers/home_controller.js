module.exports.home = function(req, res){
   // return res.end('<h1>Express is up for Codeial!</h1>')
   return res.render('home',{//user_profile is name of ejs file
    title: "Home"
   });
}