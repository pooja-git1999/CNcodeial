module.exports.profile = function (req, res) {
    // res.end('<h1>user profile</h1>');
    return res.render('user_profile', {//user_profile is name of ejs file
        title: "user profile"
    });
}
//render sign up
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    });
}
//render sign in
module.exports.signUp = function (req, res) {
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
}