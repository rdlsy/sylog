const express = require('express');
const router = express.Router();
const { Post } = require('../models/Post')

//=================================
//            GUESTBOOK
//=================================

router.post('/insertPost', (req, res) => {

  // 포스트 정보들을 저장한다.
  const post = new Post(req.body)

  post.save((err, post) => {
    if (err) return res.json({ success: false, err })

    Post.find({ '_id' : post._id })
      .populate('writer')
      .exec((err, result) => {
        if (err) return res.json({ success: false, err })
        res.status(200).json({ success: true, result })
      })
  });
});

router.post('/removePost', (req, res) => {
  Post.findOneAndDelete({ '_id' : req.body.postId })
    .exec((err, doc) => {
      if (err) return res.status(400).json({ success: false, err })
      return res.status(200).json({ success: true, doc })
    })
});

router.get('/getPosts', (req, res) => {

  // 포스트를 DB에서 가져와서 클라이언트에 보낸다.
  Post.find()
    .populate('writer')
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, posts })
    })
});

module.exports = router;