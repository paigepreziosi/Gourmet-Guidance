const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('all');
});

router.get('/login', (req, res) => {

  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

router.get('/signup', (req, res) => {
 
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signUp');
});

module.exports = router;
