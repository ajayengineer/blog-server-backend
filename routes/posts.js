const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');


//Create Post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }

});


//Update Post

router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });

                await User.findByIdAndDelete(req.params.id)
                res.status(200).json('User has been Deleted...');
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json('User not Found');
        }

    } else {
        res.status(401).json('You can Delte your Account!');
    }

});


//DELETE POST

//GET POST

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;