const Post = require('../models/post');
const Comment = require('../models/comment');//require comment for deleting comments

module.exports.create = async function (req, res) {
    try {
      let post =  await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.status(200).json({
                data:{
                    post: post
                },
                message:"post created !"
            })
        }
        //req.flash('success', 'Post published');
        return res.redirect('back');


    } catch (err) {
        console.log('error', err);
       // req.flash('error', err);
        return res.redirect('back');

    }

}

module.exports.destory = async function (req, res) {
    try {
        let post = await Post.findById(req.params.id);
        //.id means converting the object into string
        if (post.user == req.user.id) {
            post.remove();
            await Comment.deleteMany({ post: req.params.id });
           
            if(req.xhr){
                return res.status(200).json({
                    data:{
                        post_id: req.params.id
                    },
                    message:"post deleted !"
                })
            }
           
            req.flash('success', 'Post and associated comments deleted');
            return res.redirect('back');
        } else {
            req.flash('error', 'you cannot delete this post');
            return res.redirect('back');
        }
    } catch (err) {
       // console.log('error', err);
        req.flash('error', err);

        return res.redirect('back');
    }

}
