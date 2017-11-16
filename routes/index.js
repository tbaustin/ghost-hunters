const pkg_json = require('../package.json');
const turbo = require('turbo360')({ site_id: pkg_json.app });
const vertex = require('vertex360')({ site_id: pkg_json.app });
const router = vertex.router();
const ssrRequest = require('../ssrRequest');

router.get('/users', (req, res) => {
  ssrRequest(req, res, 'user');
});

module.exports = router;
