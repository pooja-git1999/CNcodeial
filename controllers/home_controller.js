const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function (req, res) {
    //  console.log(req.cookies);
    //  res.cookie('user_id', 25);//change the value of cookie
    //     Post.find({},function (err,posts) {
    //      return res.render('home', {
    //         title: "Codeial | Home",
    //        posts: posts
    //      });

    //   });

    try {
        // populate the user of each post  
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            })
        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });
    } catch (err) {
        console.log('Error', err);
        return;
    }

    // .exec(function (err, posts) {  
    //     User.find({},function (err,users) {
    //         return res.render('home', {
    //             title: "Codeial | Home",
    //             posts: posts,
    //             all_users: users
    //         });  
    //     });

    //  });

}

// module.exports.actionName = function(req, res){}