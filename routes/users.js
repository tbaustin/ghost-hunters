const pkg_json = require('../package.json');
const turbo = require('turbo360')({ site_id: pkg_json.app });
const vertex = require('vertex360')({ site_id: pkg_json.app });
const router = vertex.router();

router.post('/register', (req, res) => {
  const body = req.body;
  console.log(body);

  // very basic validation:
  if (body.username.length == 0) {
    res.json({
      confirmation: 'fail',
      message: 'Please enter an username address.'
    });

    return;
  }

  if (body.password.length == 0) {
    res.json({
      confirmation: 'fail',
      message: 'Please enter a password.'
    });

    return;
  }

  turbo
    .createUser(body)
    .then(data => {
      res.json({
        confirmation: 'success',
        user: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
});

router.post('/login', (req, res) => {
  const body = req.body;

  // very basic validation:
  if (body.username.length == 0) {
    res.json({
      confirmation: 'fail',
      message: 'Please enter an username address.'
    });

    return;
  }

  if (body.password.length == 0) {
    res.json({
      confirmation: 'fail',
      message: 'Please enter a password.'
    });

    return;
  }

  turbo
    .login(body)
    .then(data => {
      req.vertexSession.user = { id: data.id }; // set vertex session - must be set to an object
      res.json({
        confirmation: 'success',
        user: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message,
        site_id: pkg_json.app
      });
    });
});

router.get('/', (req, res) => {
  turbo
    .fetch('user', req.query)
    .then(data => {
      res.json({
        confirmation: 'success',
        users: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
});

router.get('/currentuser', (req, res) => {
  // user not logged in:
  if (req.vertexSession == null) {
    res.json({
      confirmation: 'success',
      user: null
    });
    return;
  }

  // user not logged in:
  if (req.vertexSession.user == null) {
    res.json({
      confirmation: 'success',
      user: null
    });
    return;
  }

  // user logged in:
  res.json({
    confirmation: 'success',
    user: req.vertexSession.user
  });
});

router.get('/logout', (req, res) => {
  req.vertexSession.reset();
  res.json({
    confirmation: 'success',
    user: null
  });
});

router.get('/:userid', (req, res) => {
  turbo
    .fetchOne('user', req.params.userid)
    .then(data => {
      res.json({
        confirmation: 'success',
        user: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message,
        details: 'In the URL above, enter the ID number of an existing user from your project.'
      });
    });
});

router.put('/update/:userid', (req, res) => {
  const { body } = req;
  turbo
    .updateEntity('user', req.params.id, body)
    .then(data => {
      res.json({
        confirmation: 'success',
        user: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
});

router.delete('/delete/:userid', (req, res) => {
  turbo
    .removeEntity('user', req.params.id)
    .then(data => {
      res.json({
        confirmation: 'success',
        user: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
});

module.exports = router;
