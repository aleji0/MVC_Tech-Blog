const router = require('express').Router();
const { Post, Comment, User } = require('../models/');







router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postDaTA = await Post.findAll({
      include: [User],
          attributes: ['name'],
        }),
    
        const post = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', { posts });
        catch (err) {
            res.status(500).json(err);
        }
  });


   