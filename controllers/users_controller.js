module.exports.profile = function (req, res) {
    // res.end('<h1>user profile</h1>');
    return res.render('user_profile', {//user_profile is name of ejs file
        title: "user profile"
    });
}