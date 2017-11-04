require('babel-core/register')({
  presets: ['env', 'react', 'stage-0', 'stage-1']
});

const pkg_json = require('./package.json');
const vertex = require('vertex360')({ site_id: pkg_json.app });
var renderer = require('./renderer.js');

// initialize app
const app = vertex.app();

// import routes
const index = require('./routes/index');
const api = require('./routes/api');

// hopefully will be used on every Route, this should handle SSR RR4
app.use(renderer);

// set routes
app.use('/', index);
app.use('/api', api); // sample API Routes

module.exports = app;
