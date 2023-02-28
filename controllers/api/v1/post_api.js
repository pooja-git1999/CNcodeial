const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function (req,res) {
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    
    return res.json(200, {
        message: "list of posts",
        posts: posts
    })
}

//delete post
module.exports.destory = async function (req, res) {
    try {
        let post = await Post.findById(req.params.id);
        //.id means converting the object into string
        //if (post.user == req.user.id) {
            post.remove();
            await Comment.deleteMany({ post: req.params.id });
           
            return res.json(200,{
                message: "Post and associated comments deleted"
            });
        // } else {
        //     req.flash('error', 'you cannot delete this post');
        //     return res.redirect('back');
        // }
    } catch (err) {
        console.log('******',err);
        return res.json(500,{
            message: 'Interval Server Error'
        });
    }

}
