module.exports.home = function(req, res){
   // return res.end('<h1>Express is up for Codeial!</h1>')
   console.log(req.cookies);
   res.cookie('user_id:1',25);//change the value of cookie
   return res.render('home',{//user_profile is name of ejs file
    title: "Home"
   });
}