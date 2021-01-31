const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

//=================================
//              User
//=================================

router.post('/register', (req, res) => {

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({
      success: false,
    });
    return res.status(200).json({
      success: true
    });
  });
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.'
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ 
          loginSuccess: false, 
          message: '비밀번호가 틀렸습니다.'
        });
      }
      // 비밀번호가 맞다면 토큰 생성  
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        
        // 쿠키, 로컬스토리지에 토큰 저장
        res.cookie('x_auth', user.token)
          .status(200)
          .json({ 
            loginSuccess: true,
            userId: user._id
          });
      });
    });
  });
});

// role 0 일반유저 role 0이 아니면 관리자
router.get('/auth', auth, (req, res) => {
  // Authentication = True 
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image
  })
});

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id : req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({
      success: false,
      err
    });
    return res.status(200).send({
      success: true
    });
  });
});

module.exports = router;