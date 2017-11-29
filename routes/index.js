const pkg_json = require('../package.json');
const turbo = require('turbo360')({ site_id: pkg_json.app });
const vertex = require('vertex360')({ site_id: pkg_json.app });
const router = vertex.router();

router.get('/', (req, res) => {
  res.render('index', null);
});

module.exports = router;
