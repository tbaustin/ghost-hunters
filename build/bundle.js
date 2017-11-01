/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateUtils = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(19);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _DateUtils = __webpack_require__(20);

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.DateUtils = _DateUtils2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  fetchUsers: function fetchUsers(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getRequest('user', params, _constants2.default.USERS_RECEIVED));
    };
  },

  addUser: function addUser(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.postRequest('user', params, _constants2.default.USER_CREATED));
    };
  },

  // Unlike addUser, register() also maintains a session for login state. After calling
  // TurboClient.createUser(), the new user is logged in as well:
  register: function register(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.createUser(params, _constants2.default.USER_CREATED));
    };
  },

  loginUser: function loginUser(credentials) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.login(credentials, _constants2.default.CURRENT_USER_RECEIVED));
    };
  },

  logoutUser: function logoutUser() {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.logout(_constants2.default.USER_LOGGED_OUT));
    };
  },

  currentUser: function currentUser() {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.currentUser(_constants2.default.CURRENT_USER_RECEIVED));
    };
  },

  getProfile: function getProfile(id) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getOne('user', id, _constants2.default.GET_PROFILE));
    };
  },

  updateProfile: function updateProfile(currentUser, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('user', currentUser, params, _constants2.default.UPDATE_PROFILE));
    };
  },

  deleteProfile: function deleteProfile(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('user', entity, _constants2.default.USER_DELETED));
    };
  },

  createPost: function createPost(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.createPost(params, _constants2.default.POST_CREATED));
    };
  },

  fetchPosts: function fetchPosts(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.fetchPosts(params, _constants2.default.FETCH_POSTS));
    };
  },

  getRecord: function getRecord(id) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getOne('record', id, _constants2.default.FETCH_POST));
    };
  },

  updateRecord: function updateRecord(entity, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('record', entity, params, _constants2.default.RECORD_UPDATED));
    };
  },

  deleteRecord: function deleteRecord(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('record', entity, _constants2.default.RECORD_DELETED));
    };
  },

  createReply: function createReply(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.postRequest('reply', params, _constants2.default.REPLY_CREATED));
    };
  },

  deleteReply: function deleteReply(entity) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.deleteRequest('reply', entity, _constants2.default.REPLY_DELETED));
    };
  },

  updateReply: function updateReply(entity, params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.putRequest('reply', entity, params, _constants2.default.REPLY_UPDATED));
    };
  },

  getReplies: function getReplies(params) {
    return function (dispatch) {
      return dispatch(_utils.TurboClient.getRequest('reply', params, _constants2.default.GET_REPLIES));
    };
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateReply = exports.UpdateRecord = exports.UpdateProfile = exports.CreateReply = exports.CreateAccount = exports.CreatePost = undefined;

var _CreatePost = __webpack_require__(18);

var _CreatePost2 = _interopRequireDefault(_CreatePost);

var _CreateAccount = __webpack_require__(22);

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

var _CreateReply = __webpack_require__(23);

var _CreateReply2 = _interopRequireDefault(_CreateReply);

var _UpdateProfile = __webpack_require__(24);

var _UpdateProfile2 = _interopRequireDefault(_UpdateProfile);

var _UpdateRecord = __webpack_require__(25);

var _UpdateRecord2 = _interopRequireDefault(_UpdateRecord);

var _UpdateReply = __webpack_require__(26);

var _UpdateReply2 = _interopRequireDefault(_UpdateReply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CreatePost = _CreatePost2.default;
exports.CreateAccount = _CreateAccount2.default;
exports.CreateReply = _CreateReply2.default;
exports.UpdateProfile = _UpdateProfile2.default;
exports.UpdateRecord = _UpdateRecord2.default;
exports.UpdateReply = _UpdateReply2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  USERS_RECEIVED: 'USERS_RECEIVED',
  USER_CREATED: 'USER_CREATED',
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',

  GET_PROFILE: 'GET_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  USER_DELETED: 'USER_DELETED',

  POST_CREATED: 'POST_CREATED',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  RECORD_UPDATED: 'RECORD_UPDATED',
  RECORD_DELETED: 'RECORD_DELETED',

  REPLY_CREATED: 'REPLY_CREATED',
  GET_REPLIES: 'GET_REPLIES',
  REPLY_DELETED: 'REPLY_DELETED',
  REPLY_UPDATED: 'REPLY_UPDATED'
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"name":"ghost-hunters","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"npm-run-all --parallel dev:*","dev:server":"nodemon --watch build --exec node build/bundle.js","dev:build-server":"webpack --config webpack.server.js --watch","dev:build-client":"webpack -w","clean":"rimraf ./public/dist/*","build":"npm run clean && set NODE_ENV=production && webpack && gulp prod","postinstall":"npm run build"},"dependencies":{"bluebird":"latest","concurrently":"^3.5.0","debug":"latest","dotenv":"latest","moment":"latest","react-bootstrap":"latest","react-dom":"latest","react-dropzone":"latest","react-helmet":"^5.2.0","react-redux":"latest","react-router-config":"^1.0.0-beta.4","react-router-dom":"^4.2.2","react-time":"latest","redux":"latest","redux-thunk":"latest","serialize-javascript":"^1.4.0","superagent":"latest","sweetalert":"^2.0.8","turbo360":"latest","vertex360":"latest","webpack-node-externals":"^1.6.0"},"devDependencies":{"babel-core":"latest","babel-loader":"latest","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"latest","babel-preset-es2015":"latest","babel-preset-react":"latest","babel-preset-stage-0":"latest","babel-preset-stage-1":"latest","babel-preset-stage-2":"latest","chai":"latest","chai-http":"latest","gulp":"latest","gulp-6to5":"latest","gulp-autoprefixer":"latest","gulp-babel":"^7.0.0","gulp-concat":"latest","gulp-less":"latest","gulp-minify-css":"latest","gulp-rename":"latest","gulp-uglify":"latest","json-loader":"latest","mocha":"latest","mocha-jscs":"latest","mocha-jshint":"latest","nodemon":"latest","rimraf":"latest","webpack":"latest"},"functions":{"turbo360":"latest"},"app":"59e0c137221d130012ee41dc","deploy":["."],"format":"vertex"}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reply = exports.Post = exports.Profile = exports.Account = exports.Posts = undefined;

var _Posts = __webpack_require__(17);

var _Posts2 = _interopRequireDefault(_Posts);

var _Account = __webpack_require__(27);

var _Account2 = _interopRequireDefault(_Account);

var _Post = __webpack_require__(28);

var _Post2 = _interopRequireDefault(_Post);

var _Profile = __webpack_require__(29);

var _Profile2 = _interopRequireDefault(_Profile);

var _Reply = __webpack_require__(30);

var _Reply2 = _interopRequireDefault(_Reply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Posts = _Posts2.default;
exports.Account = _Account2.default;
exports.Profile = _Profile2.default;
exports.Post = _Post2.default;
exports.Reply = _Reply2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("turbo360");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vertex360");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(3);

var _containers = __webpack_require__(10);

var _App = __webpack_require__(31);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _containers.Posts, {
    path: '/',
    exact: true
  }), _extends({}, _containers.Post, {
    path: '/post/:id'
  }), _extends({}, _containers.Profile, {
    path: '/profile/:id'
  }), _extends({}, _containers.NotFound)]
})];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRouterConfig = __webpack_require__(9);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

var _stores = __webpack_require__(33);

var _stores2 = _interopRequireDefault(_stores);

var _renderer = __webpack_require__(41);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(45)({
  presets: ['env', 'react', 'stage-0', 'stage-1']
});

var pkg_json = __webpack_require__(8);
var vertex = __webpack_require__(13)({ site_id: pkg_json.app });

// initialize app
var app = vertex.app();

// import routes
var index = __webpack_require__(46);
var api = __webpack_require__(47);

// set routes
app.use('/', index);
app.use('/api', api); // sample API Routes

app.get('*', function (req, res) {
  var store = (0, _stores2.default)(); // create Store in order to get data from redux

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    // Matches the route and loads data if loadData function is there
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve); // lets all data to be loaded even if something fails
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    if (context.url) {
      return res.redirect(301, context.url); // redirect for non auth users
    }

    if (context.notFound) {
      res.status(404); // set status to 404 for unknown route
    }
    (0, _renderer2.default)(res, req, store, context);
  });
});

module.exports = app;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactRouterDom = __webpack_require__(3);

var _view = __webpack_require__(6);

var _containers = __webpack_require__(10);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.post.all == null) {
        this.props.fetchPosts({}).then(function (response) {
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      }
      if (this.props.reply.all == null) {
        this.props.getReplies({}).then(function () {
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'createPost',
    value: function createPost(params) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register before posting',
          type: 'error'
        });
        return;
      }

      var updated = Object.assign({}, params, { profile: currentUser });

      this.props.createPost(updated).then(function (data) {
        (0, _sweetalert2.default)({
          title: 'Post Created',
          text: 'Title: ' + data.title,
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var posts = this.props.post.all;
      var currentUser = this.props.user.currentUser;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'card-columns' },
              posts == null ? null : posts.map(function (post) {
                return _react2.default.createElement(
                  'div',
                  {
                    key: post.id,
                    className: 'card text-white bg-dark mb-3',
                    style: { maxWidth: '20rem' }
                  },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/post/' + post.id },
                      _react2.default.createElement('img', { className: 'card-img-top', src: post.image, alt: 'Card image cap' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-body text-white' },
                    _react2.default.createElement(
                      'h4',
                      { className: 'card-title', style: { color: 'white' } },
                      post.title.length > 17 ? post.title.substr(0, 17) + '...' : post.title
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'card-text' },
                      post.text.length > 30 ? post.text.substr(0, 30) + '...' : post.text
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      '~',
                      ' ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profile/' + post.profile.id, style: { color: 'white' } },
                        _react2.default.createElement(
                          'strong',
                          null,
                          post.profile.username || 'Anonymous'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'card-footer' },
                    _react2.default.createElement(
                      'small',
                      { className: 'text-muted' },
                      _utils.DateUtils.relativeTime(post.timestamp)
                    )
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-12' },
                _react2.default.createElement(_containers.Account, null)
              )
            ),
            currentUser == null ? null : _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '25px' } },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Create a Post'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  _react2.default.createElement(_view.CreatePost, { onCreate: this.createPost.bind(this) })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Posts;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    post: state.post,
    user: state.user,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    createPost: function createPost(params) {
      return dispatch(_actions2.default.createPost(params));
    },
    fetchPosts: function fetchPosts(params) {
      return dispatch(_actions2.default.fetchPosts(params));
    },
    getReplies: function getReplies(params) {
      return dispatch(_actions2.default.getReplies(params));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.fetchPosts());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Posts)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactDropzone = __webpack_require__(11);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePost = function (_Component) {
  _inherits(CreatePost, _Component);

  function CreatePost() {
    _classCallCheck(this, CreatePost);

    var _this = _possibleConstructorReturn(this, (CreatePost.__proto__ || Object.getPrototypeOf(CreatePost)).call(this));

    _this.state = {
      post: {
        title: '',
        text: '',
        image: 'https://lh3.googleusercontent.com/jt6x5sv4Q06g2LB_hnSeEqFWfBt2OvIqNKeNBBJa-lzEvWMNy886eiXVPcjWK-zLIs6m9Tj9VZzjcDUuVVANQaZXhA',
        video: null
      }
    };
    return _this;
  }

  _createClass(CreatePost, [{
    key: 'updatePost',
    value: function updatePost(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.post);
      updated[attr] = event.target.value;

      this.setState({
        post: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.post);
      var file = files[0];
      var imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
      if (file.type.match(imageType) == null) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Image Type',
          text: 'Please only use .png .jpg .gif .jpeg',
          type: 'error'
        });
        return;
      }

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated['image'] = data.result.url;
        _this2.setState({
          post: updated
        });
        (0, _sweetalert2.default)({
          title: 'Image Uploaded',
          html: '<img src=\'' + data.result.url + '=s100\' />',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'videoUpload',
    value: function videoUpload(files) {
      var _this3 = this;

      var updated = Object.assign({}, this.state.post);
      var file = files[0];
      var videoType = new RegExp(/^video\/(?:mp4|webm|ogg)$/);
      if (file.type.match(videoType == null)) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Video Type',
          text: 'Please only use .webm .ogg .mp4',
          type: 'error'
        });
        return;
      }

      updated['videoType'] = file.type;

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated['video'] = data.result.url;
        _this3.setState({
          post: updated
        });
        (0, _sweetalert2.default)({
          title: 'Video Uploaded',
          text: '' + data.result.name,
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createPost',
    value: function createPost(event) {
      event.preventDefault();
      var _state$post = this.state.post,
          title = _state$post.title,
          text = _state$post.text;

      if (title.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please include a Title',
          type: 'error'
        });
        return;
      }
      if (text.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please include some text',
          type: 'error'
        });
        return;
      }
      this.props.onCreate(this.state.post);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'title' },
            'Title'
          ),
          _react2.default.createElement('input', {
            onChange: this.updatePost.bind(this, 'title'),
            className: 'form-control',
            id: 'title',
            type: 'text',
            placeholder: 'Title'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'text' },
            'Text'
          ),
          _react2.default.createElement('input', {
            onChange: this.updatePost.bind(this, 'text'),
            className: 'form-control',
            id: 'text',
            type: 'text',
            placeholder: 'Text'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _reactDropzone2.default,
              { className: 'btn btn-success', onDrop: this.imageUpload.bind(this) },
              'Upload Image'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              _reactDropzone2.default,
              { className: 'btn btn-warning', onDrop: this.videoUpload.bind(this) },
              'Upload Video'
            )
          )
        ),
        this.state.post.image.length == 0 ? null : _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement('img', { src: this.state.post.image + '=s150', style: { paddingTop: '8px' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6', style: { paddingTop: '8px' } },
            _react2.default.createElement(
              'button',
              { onClick: this.createPost.bind(this), className: 'btn btn-primary' },
              'Submit'
            )
          ),
          this.state.post.video == null ? null : _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'h3',
              { style: { color: 'red', border: '1px dashed red', borderRadius: '8px' } },
              'Video Uploaded'
            )
          )
        )
      );
    }
  }]);

  return CreatePost;
}(_react.Component);

exports.default = CreatePost;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _turbo = __webpack_require__(12);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(8);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var getRequest = function getRequest(resource, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params, // can be null
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var getOne = function getOne(resource, id, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).fetchOne(resource, id).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: id, // can be null
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var putRequest = function putRequest(resource, entity, params, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var createUser = function createUser(credentials, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var login = function login(credentials, actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var logout = function logout(actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).logout().then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var currentUser = function currentUser(actionType) {
  return function (dispatch) {
    return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data
        });
      }

      return data;
    }).catch(function (err) {
      throw err;
    });
  };
};

var uploadFile = function uploadFile(file) {
  return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

var createPost = function createPost(params, actionType) {
  return postRequest('record', params, actionType);
};

var fetchPosts = function fetchPosts(params, actionType) {
  return getRequest('record', params, actionType);
};

exports.default = {
  getRequest: getRequest,
  postRequest: postRequest,
  putRequest: putRequest,
  deleteRequest: deleteRequest,
  createUser: createUser,
  login: login,
  logout: logout,
  currentUser: currentUser,
  uploadFile: uploadFile,
  createPost: createPost,
  fetchPosts: fetchPosts,
  getOne: getOne
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTime = __webpack_require__(21);

var _reactTime2 = _interopRequireDefault(_reactTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/andreypopp/react-time

exports.default = {
  formattedDate: function formattedDate(date) {
    var now = new Date().getTime();
    var newDate = new Date(date).getTime();
    var diff = now - newDate;

    var seconds = diff / 1000;
    var mins = seconds / 60;
    var hours = mins / 60;

    if (hours < 24) {
      return _react2.default.createElement(_reactTime2.default, { value: date, format: 'MMM DD, YYYY', relative: true });
    }

    return _react2.default.createElement(_reactTime2.default, { value: date, format: 'MMM DD, YYYY' });
  },

  relativeTime: function relativeTime(date) {
    return _react2.default.createElement(_reactTime2.default, { value: date, titleFormat: 'YYYY/MM/DD HH:mm', relative: true });
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-time");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccount = function (_Component) {
  _inherits(CreateAccount, _Component);

  function CreateAccount() {
    _classCallCheck(this, CreateAccount);

    var _this = _possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).call(this));

    _this.state = {
      account: {
        username: '',
        password: ''
      }
    };
    return _this;
  }

  _createClass(CreateAccount, [{
    key: 'updateAccount',
    value: function updateAccount(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.account);
      updated[attr] = event.target.value;
      this.setState({
        account: updated
      });
    }
  }, {
    key: 'register',
    value: function register(event) {
      event.preventDefault();
      var _state$account = this.state.account,
          username = _state$account.username,
          password = _state$account.password;

      if (username.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Username',
          type: 'error'
        });
        return;
      }
      if (password.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Password',
          type: 'error'
        });
        return;
      }
      this.props.onRegister(this.state.account);
    }
  }, {
    key: 'login',
    value: function login(event) {
      event.preventDefault();
      var _state$account2 = this.state.account,
          username = _state$account2.username,
          password = _state$account2.password;

      if (username.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Username',
          type: 'error'
        });
        return;
      }
      if (password.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You forgot your Password',
          type: 'error'
        });
        return;
      }
      this.props.onLogin(this.state.account);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Register/Login'
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'username' },
            'Username'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateAccount.bind(this, 'username'),
            className: 'form-control',
            id: 'username',
            type: 'text',
            placeholder: 'Username'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'password' },
            'Password'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateAccount.bind(this, 'password'),
            className: 'form-control',
            id: 'password',
            type: 'password',
            placeholder: 'Password'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'button',
              { onClick: this.register.bind(this), className: 'btn btn-primary' },
              'Register'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'button',
              { onClick: this.login.bind(this), className: 'btn btn-success' },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return CreateAccount;
}(_react.Component);

exports.default = CreateAccount;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateReply = function (_Component) {
  _inherits(CreateReply, _Component);

  function CreateReply() {
    _classCallCheck(this, CreateReply);

    var _this = _possibleConstructorReturn(this, (CreateReply.__proto__ || Object.getPrototypeOf(CreateReply)).call(this));

    _this.state = {
      reply: {
        text: ''
      }
    };
    return _this;
  }

  _createClass(CreateReply, [{
    key: 'updateReply',
    value: function updateReply(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.reply);
      updated[attr] = event.target.value;
      this.setState({
        reply: updated
      });
    }
  }, {
    key: 'createReply',
    value: function createReply(event) {
      event.preventDefault();
      var text = this.state.reply.text;

      if (text.length == 0) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please provide some text',
          type: 'error'
        });
        return;
      }
      this.props.onCreate(this.state.reply);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row', style: { border: '1px solid #e6e6e6', padding: '20px' } },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-12' },
          _react2.default.createElement('textarea', {
            onChange: this.updateReply.bind(this, 'text'),
            className: 'form-control',
            rows: '3'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-12' },
          _react2.default.createElement(
            'button',
            { onClick: this.createReply.bind(this), className: 'btn btn-warning' },
            'Comment'
          )
        )
      );
    }
  }]);

  return CreateReply;
}(_react.Component);

exports.default = CreateReply;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactDropzone = __webpack_require__(11);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateProfile = function (_Component) {
  _inherits(UpdateProfile, _Component);

  function UpdateProfile() {
    _classCallCheck(this, UpdateProfile);

    var _this = _possibleConstructorReturn(this, (UpdateProfile.__proto__ || Object.getPrototypeOf(UpdateProfile)).call(this));

    _this.state = {
      editShow: false,
      profile: {}
    };
    return _this;
  }

  _createClass(UpdateProfile, [{
    key: 'updateProfile',
    value: function updateProfile(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.profile);
      updated[attr] = event.target.value;
      this.setState({
        profile: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(attr, files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.profile);
      var file = files[0];
      var imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
      if (file.type.match(imageType) == null) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Image Type',
          text: 'Please only use .png .jpg .gif .jpeg',
          type: 'error'
        });
        return;
      }

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated[attr] = data.result.url;
        _this2.setState({
          profile: updated
        });
        (0, _sweetalert2.default)({
          title: 'Image Uploaded',
          html: '<img src=\'' + data.result.url + '=s100\' />',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createUpdatedProfile',
    value: function createUpdatedProfile(event) {
      event.preventDefault();
      this.setState({
        editShow: false
      });
      this.props.onCreate(this.state.profile);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var profile = this.state.profile;
      var currentProfile = this.props.currentProfile;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row justify-content-center', style: { marginBottom: '100px' } },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'a',
              { href: '#update_user' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-warning btn-lg btn-block',
                  onClick: function onClick() {
                    _this3.setState({ editShow: !_this3.state.editShow });
                  }
                },
                'Edit Profile'
              )
            )
          )
        ),
        this.state.editShow == false ? null : _react2.default.createElement(
          'div',
          { className: 'row justify-content-center' },
          _react2.default.createElement(
            'div',
            { id: 'update_user' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-6' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'firstName' },
                  'First Name'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'firstName'),
                  type: 'text',
                  className: 'form-control',
                  id: 'firstName',
                  defaultValue: currentProfile.firstName || 'First Name'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-6' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'lastName' },
                  'Last Name'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'lastName'),
                  type: 'text',
                  className: 'form-control',
                  id: 'lastName',
                  defaultValue: currentProfile.lastName || 'Last Name'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'email' },
                  'Email address'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateProfile.bind(this, 'email'),
                  type: 'email',
                  className: 'form-control',
                  id: 'email',
                  'aria-describedby': 'emailHelp',
                  defaultValue: currentProfile.Email || 'Email'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'bio' },
                  'Biography'
                ),
                _react2.default.createElement('textarea', {
                  onChange: this.updateProfile.bind(this, 'bio'),
                  defaultValue: currentProfile.bio || 'Biography',
                  className: 'form-control',
                  id: 'bio',
                  rows: '4'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  {
                    className: 'btn btn-warning',
                    onDrop: this.imageUpload.bind(this, 'image')
                  },
                  'Upload Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-4 ml-auto' },
                profile.image != null ? _react2.default.createElement('img', { src: profile.image + '=s150' }) : currentProfile.image != null ? _react2.default.createElement('img', { src: currentProfile.iamge + '=s150' }) : null
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '15px' } },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  {
                    className: 'btn btn-info',
                    onDrop: this.imageUpload.bind(this, 'bannerImage')
                  },
                  'Upload Banner Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 ml-auto' },
                profile.bannerImage != null ? _react2.default.createElement('img', { src: profile.bannerImage + '=s200' }) : currentProfile.bannerImage != null ? _react2.default.createElement('img', { src: currentProfile.bannerImage + '=s200' }) : null
              )
            ),
            _react2.default.createElement('hr', { className: 'my-4' }),
            _react2.default.createElement(
              'button',
              {
                onClick: this.createUpdatedProfile.bind(this),
                className: 'btn btn-success',
                style: { marginBottom: '100px' }
              },
              'Update'
            )
          )
        )
      );
    }
  }]);

  return UpdateProfile;
}(_react.Component);

exports.default = UpdateProfile;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactDropzone = __webpack_require__(11);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateRecord = function (_Component) {
  _inherits(UpdateRecord, _Component);

  function UpdateRecord() {
    _classCallCheck(this, UpdateRecord);

    var _this = _possibleConstructorReturn(this, (UpdateRecord.__proto__ || Object.getPrototypeOf(UpdateRecord)).call(this));

    _this.state = {
      record: {}
    };
    return _this;
  }

  _createClass(UpdateRecord, [{
    key: 'updateRecord',
    value: function updateRecord(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.record);
      updated[attr] = event.target.value;
      this.setState({
        record: updated
      });
    }
  }, {
    key: 'imageUpload',
    value: function imageUpload(attr, files) {
      var _this2 = this;

      var updated = Object.assign({}, this.state.record);
      var file = files[0];
      var imageType = new RegExp(/^image[/](?:jpe?g|gif|png)$/);
      if (file.type.match(imageType) == null) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Image Type',
          text: 'Please only use .png .jpg .gif .jpeg',
          type: 'error'
        });
        return;
      }

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated[attr] = data.result.url;
        _this2.setState({
          record: updated
        });
        (0, _sweetalert2.default)({
          title: 'Image Uploaded',
          html: '<img src=\'' + data.result.url + '=s100\' />',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'videoUpload',
    value: function videoUpload(attr, files) {
      var _this3 = this;

      var updated = Object.assign({}, this.state.post);
      var file = files[0];
      var videoType = new RegExp(/^video\/(?:mp4|webm|ogg)$/);
      if (file.type.match(videoType == null)) {
        (0, _sweetalert2.default)({
          title: 'Unacceptable Video Type',
          text: 'Please only use .webm .ogg .mp4',
          type: 'error'
        });
        return;
      }

      updated['videoType'] = file.type;

      _utils.TurboClient.uploadFile(file).then(function (data) {
        updated[attr] = data.result.url;
        _this3.setState({
          post: updated
        });
        (0, _sweetalert2.default)({
          title: 'Video Uploaded',
          text: '' + data.result.name,
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createUpdatedRecord',
    value: function createUpdatedRecord(event) {
      event.preventDefault();
      this.props.onCreate(this.state.record);
    }
  }, {
    key: 'render',
    value: function render() {
      var record = this.state.record;
      var currentRecord = this.props.currentRecord;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row justify-content-center' },
          _react2.default.createElement(
            'div',
            { id: 'update_user' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-md-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'firstName' },
                  'Title'
                ),
                _react2.default.createElement('input', {
                  onChange: this.updateRecord.bind(this, 'title'),
                  type: 'text',
                  className: 'form-control',
                  id: 'firstName',
                  defaultValue: currentRecord.title || 'Title'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-12' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'text' },
                  'Description'
                ),
                _react2.default.createElement('textarea', {
                  onChange: this.updateRecord.bind(this, 'text'),
                  defaultValue: currentRecord.text || 'Description',
                  className: 'form-control',
                  id: 'text',
                  rows: '4'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  { className: 'btn btn-warning', onDrop: this.imageUpload.bind(this, 'image') },
                  'Upload Image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-4 ml-auto' },
                record.image != null ? _react2.default.createElement('img', { src: record.image + '=s150' }) : currentRecord.image != null ? _react2.default.createElement('img', { src: currentRecord.image + '=s150' }) : null
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '15px' } },
              _react2.default.createElement(
                'div',
                { className: 'form-group col-sm-4' },
                _react2.default.createElement(
                  _reactDropzone2.default,
                  { className: 'btn btn-info', onDrop: this.videoUpload.bind(this, 'video') },
                  'Upload Video'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6 ml-auto' },
                record.video != null ? _react2.default.createElement(
                  'div',
                  { 'class': 'alert alert-success', role: 'alert' },
                  'New Video Added!'
                ) : currentRecord.video != null ? _react2.default.createElement(
                  'div',
                  { 'class': 'alert alert-success', role: 'alert' },
                  'Video already attached to Post!'
                ) : null
              )
            ),
            _react2.default.createElement('hr', { className: 'my-4' }),
            _react2.default.createElement(
              'button',
              {
                onClick: this.createUpdatedRecord.bind(this),
                className: 'btn btn-success',
                style: { marginBottom: '100px' }
              },
              'Update'
            )
          )
        )
      );
    }
  }]);

  return UpdateRecord;
}(_react.Component);

exports.default = UpdateRecord;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateReply = function (_Component) {
  _inherits(UpdateReply, _Component);

  function UpdateReply() {
    _classCallCheck(this, UpdateReply);

    var _this = _possibleConstructorReturn(this, (UpdateReply.__proto__ || Object.getPrototypeOf(UpdateReply)).call(this));

    _this.state = {
      reply: {}
    };
    return _this;
  }

  _createClass(UpdateReply, [{
    key: "updateReply",
    value: function updateReply(attr, event) {
      event.preventDefault();
      var updated = Object.assign({}, this.state.reply);
      updated[attr] = event.target.value;
      this.setState({
        reply: updated
      });
    }
  }, {
    key: "createUpdatedReply",
    value: function createUpdatedReply(event) {
      event.preventDefault();
      this.props.onCreate(this.state.reply);
    }
  }, {
    key: "render",
    value: function render() {
      var reply = this.state.reply;
      var currentReply = this.props.currentReply;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "form-group col-sm-10" },
              _react2.default.createElement("textarea", {
                onChange: this.updateReply.bind(this, 'text'),
                defaultValue: currentReply.text || 'Comment',
                className: "form-control",
                rows: "2"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-sm-2" },
              _react2.default.createElement(
                "button",
                { onClick: this.createUpdatedReply.bind(this), className: "btn btn-info btn-sm" },
                "Update"
              )
            )
          )
        )
      );
    }
  }]);

  return UpdateReply;
}(_react.Component);

exports.default = UpdateReply;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactRouterDom = __webpack_require__(3);

var _view = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Component) {
  _inherits(Account, _Component);

  function Account() {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
  }

  _createClass(Account, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.user.currentUser == null) {
        this.props.currentUser().then(function (data) {
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'register',
    value: function register(params) {
      this.props.register(params).then(function (data) {
        (0, _sweetalert2.default)({
          title: '' + data.username,
          text: 'Thank you for joining',
          type: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'login',
    value: function login(params) {
      this.props.loginUser(params).then(function (data) {
        (0, _sweetalert2.default)({
          title: '' + data.username,
          text: 'Welcome Back!',
          type: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.logoutUser().then(function (data) {
        (0, _sweetalert2.default)({
          title: 'User Logged Out',
          text: 'We hope to see you again',
          type: 'success'
        });
      }).catch(function (err) {
        alert(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentUser = this.props.user.currentUser;

      return _react2.default.createElement(
        'div',
        null,
        currentUser == null ? _react2.default.createElement(_view.CreateAccount, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-8' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/profile/' + currentUser.id },
                  currentUser.username
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: 'profile/' + currentUser.id, className: 'btn btn-info btn-sm' },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(
                'button',
                { onClick: this.logout.bind(this), className: 'btn btn-danger btn-sm' },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return Account;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    user: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    register: function register(params) {
      return dispatch(_actions2.default.register(params));
    },
    loginUser: function loginUser(params) {
      return dispatch(_actions2.default.loginUser(params));
    },
    currentUser: function currentUser() {
      return dispatch(_actions2.default.currentUser());
    },
    logoutUser: function logoutUser() {
      return dispatch(_actions2.default.logoutUser());
    }
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Account)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(3);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

var _utils = __webpack_require__(2);

var _containers = __webpack_require__(10);

var _view = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this));

    _this.state = {
      editShow: false
    };
    return _this;
  }

  _createClass(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.match.params.id;

      if (this.props.posts[id] != null) {
        return;
      }
      this.props.getRecord(id).then(function (record) {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'updateRecord',
    value: function updateRecord(params) {
      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;

      if (post.profile.id !== currentUser.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Must be owner of post',
          type: 'error'
        });
        return;
      }

      this.props.updateRecord(post, params).then(function (response) {
        (0, _sweetalert2.default)({
          title: 'Success',
          text: currentUser.username + ' Your post has been updated!',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord() {
      var _this2 = this;

      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== post.profile.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Must be owner of post',
          type: 'error'
        });
        return;
      }

      this.props.deleteRecord(post).then(function () {
        _this2.props.history.push('/');

        (0, _sweetalert2.default)({
          title: 'Post Delete',
          text: 'Please create a new post',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var id = this.props.match.params.id;

      var post = this.props.posts[id];
      var currentUser = this.props.user.currentUser;

      if (post == null) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'jumbotron' },
          _react2.default.createElement(
            'h1',
            { className: 'display-3' },
            post.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'row', style: { marginBottom: '25px' } },
            _react2.default.createElement('img', {
              className: 'img-fluid mx-auto',
              src: '' + post.image,
              style: { maxHeight: '400px' }
            })
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            post.text
          ),
          _react2.default.createElement('hr', { className: 'my-4' }),
          post.video == undefined ? null : _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-8' },
              _react2.default.createElement(
                'div',
                { className: 'lead', style: { marginBottom: '25px' } },
                _react2.default.createElement(
                  'div',
                  { className: 'embed-responsive embed-responsive-16by9' },
                  _react2.default.createElement(
                    'video',
                    { style: { background: 'black' }, width: '800', controls: true, loop: true, tabIndex: '0' },
                    _react2.default.createElement('source', { src: post.video, type: post.videoType }),
                    'Your browser does not support HTML5 video.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'lead' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/profile/' + post.profile.id },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-secondary btn-lg' },
                post.profile.username
              )
            ),
            _react2.default.createElement(
              'p',
              { style: { marginTop: '10px' } },
              _utils.DateUtils.relativeTime(post.timestamp)
            )
          ),
          currentUser == null ? null : currentUser.id !== post.profile.id ? null : _react2.default.createElement(
            'div',
            { className: 'row justify-content-end' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    _this3.setState({ editShow: !_this3.state.editShow });
                  },
                  className: 'btn btn-success'
                },
                'Edit'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.deleteRecord.bind(this), className: 'btn btn-danger' },
                'Delete'
              )
            )
          )
        ),
        this.state.editShow === false ? null : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_view.UpdateRecord, { onCreate: this.updateRecord.bind(this), currentRecord: post })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_containers.Reply, { postId: post.id })
        )
      );
    }
  }]);

  return Post;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    posts: state.post,
    user: state.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    getRecord: function getRecord(id) {
      return dispatch(_actions2.default.getRecord(id));
    },
    updateRecord: function updateRecord(entity, params) {
      return dispatch(_actions2.default.updateRecord(entity, params));
    },
    deleteRecord: function deleteRecord(entity) {
      return dispatch(_actions2.default.deleteRecord(entity));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.getRecord(undefined.props.match.params.id));
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Post)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

var _view = __webpack_require__(6);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {
      profile: {
        image: 'https://lh3.googleusercontent.com/EJf2u6azJe-TA6YeMWpDtMHAG6u3i1S1DhbiUXViaF5Pyg_CPEOCOEquKbX3U-drH29oYe98xKJiWqYP1ZxPGUQ545k',
        bannerImage: 'https://lh3.googleusercontent.com/RAdfZt76XmM5p_rXwVsfQ3J8ca9aQUgONQaXSE1cC0bR0xETrKAoX8OEOzID-ro_3vFfgO8ZMQIqmjTiaCvuK4GtzI8',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Contact Email',
        bio: 'Bio will go here'
      }
    };

    _this.deleteProfile = _this.deleteProfile.bind(_this);
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.match.params.id;


      if (this.props.profiles[id] != null) {
        return;
      }

      this.props.getProfile(id).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createUpdatedProfile',
    value: function createUpdatedProfile(params) {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          type: 'error'
        });

        return;
      }

      this.props.updateProfile(currentUser, params).then(function (response) {
        (0, _sweetalert2.default)({
          title: response.username + ' Updated!',
          text: 'Thank you for updating your profile',
          type: 'success'
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteProfile',
    value: function deleteProfile() {
      var _this2 = this;

      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;


      if (currentUser.id !== profile.id) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'You do not own this profile',
          type: 'error'
        });

        return;
      }

      (0, _sweetalert2.default)({
        title: 'Are you sure?',
        text: 'Your Profile will be lost forever!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        var userPosts = _this2.props.post.all.filter(function (p) {
          return p.profile.id === profile.id;
        });
        var userReplies = _this2.props.reply.all.filter(function (r) {
          return r.user.id === profile.id;
        });
        userPosts.map(function (post) {
          _this2.props.deleteRecord(post);
        });
        userReplies.map(function (reply) {
          _this2.props.deleteReply(reply);
        });
        _this2.props.deleteProfile(profile).then(function (data) {
          return _this2.props.logoutUser();
        }).then(function (data) {
          _this2.props.history.push('/');
          (0, _sweetalert2.default)('Deleted!', 'Your Profile has been deleted.', 'success');
          return null;
        }).catch(function (err) {
          console.log(err);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.match.params.id;

      var profile = this.props.profiles[id];
      var currentUser = this.props.user.currentUser;

      var defaultProfile = this.state.profile;
      var bannerUrl = profile == null ? defaultProfile.bannerImage : profile.bannerImage || defaultProfile.bannerImage;
      var bannerStyle = {
        backgroundImage: 'url(' + bannerUrl + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
      var nameStyle = {
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px'
      };
      var imageStyle = {
        maxHeight: '150px',
        margin: '20px auto'
      };

      return _react2.default.createElement(
        'div',
        null,
        profile == null ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Profile no longer exists'
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'jumbotron jumbotron-fluid', style: bannerStyle },
            _react2.default.createElement(
              'div',
              { className: 'container', style: nameStyle },
              _react2.default.createElement('img', {
                src: profile.image || defaultProfile.image,
                style: imageStyle,
                className: 'rounded img-fluid mx-auto d-block'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                'h1',
                { className: 'display-3 text-center' },
                profile.username
              ),
              _react2.default.createElement(
                'p',
                { className: 'lead text-center' },
                profile.firstName || defaultProfile.firstName,
                ' ',
                profile.lastName || defaultProfile.lastName
              ),
              _react2.default.createElement(
                'p',
                { className: 'lead text-center text-muted' },
                profile.email || defaultProfile.email
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-center text-muted' },
                'User since: ',
                _utils.DateUtils.relativeTime(profile.timestamp)
              ),
              _react2.default.createElement('hr', { className: 'my-4' }),
              _react2.default.createElement(
                'p',
                { className: 'lead', style: { border: '1px solid #e6e6e6', padding: '20px' } },
                profile.bio || defaultProfile.bio
              )
            )
          ),
          currentUser == null ? null : currentUser.id !== profile.id ? null : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_view.UpdateProfile, {
              currentProfile: profile,
              onCreate: this.createUpdatedProfile.bind(this)
            }),
            _react2.default.createElement(
              'div',
              { className: 'row justify-content-center', style: { marginBottom: '100px' } },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-6' },
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-danger btn-lg btn-block',
                    onClick: this.deleteProfile
                  },
                  'DELETE Profile'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    profiles: state.profile,
    user: state.user,
    post: state.post,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    getProfile: function getProfile(id) {
      return dispatch(_actions2.default.getProfile(id));
    },
    updateProfile: function updateProfile(currentUser, params) {
      return dispatch(_actions2.default.updateProfile(currentUser, params));
    },
    deleteProfile: function deleteProfile(entity) {
      return dispatch(_actions2.default.deleteProfile(entity));
    },
    deleteRecord: function deleteRecord(entity) {
      return dispatch(_actions2.default.deleteRecord(entity));
    },
    deleteReply: function deleteReply(entity) {
      return dispatch(_actions2.default.deleteReply(entity));
    },
    logoutUser: function logoutUser() {
      return dispatch(_actions2.default.logoutUser());
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.getProfile(undefined.props.match.params.id));
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Profile)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _sweetalert = __webpack_require__(1);

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _reactRouterDom = __webpack_require__(3);

var _view = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reply = function (_Component) {
  _inherits(Reply, _Component);

  function Reply() {
    _classCallCheck(this, Reply);

    var _this = _possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this));

    _this.state = {
      editShow: false
    };
    return _this;
  }

  _createClass(Reply, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.reply[this.props.postId] != null) {
        return;
      }
      this.props.getReplies({ postId: this.props.postId }).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'createReply',
    value: function createReply(params) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          type: 'error'
        });
        return;
      }

      params['user'] = {
        username: currentUser.username,
        id: currentUser.id
      };
      params['postId'] = this.props.postId;

      this.props.createReply(params).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'updateReply',
    value: function updateReply(reply, params) {
      var _this2 = this;

      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          type: 'error'
        });
        return;
      }

      this.props.updateReply(reply, params).then(function () {
        _this2.setState({
          editShow: false
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'deleteReply',
    value: function deleteReply(reply) {
      var currentUser = this.props.user.currentUser;

      if (currentUser == null) {
        (0, _sweetalert2.default)({
          title: 'Oops...',
          text: 'Please Login or Register',
          type: 'error'
        });
        return;
      }

      this.props.deleteReply(reply).then(function () {}).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var replies = this.props.reply[this.props.postId];
      var currentUser = this.props.user.currentUser;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'ul',
              { className: 'list-group' },
              replies == null ? _react2.default.createElement(
                'div',
                null,
                'No Replies'
              ) : replies.map(function (reply) {
                return _react2.default.createElement(
                  'li',
                  { key: reply.id, className: 'list-group-item list-group-item-secondary' },
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _this3.state.editShow === false ? _react2.default.createElement(
                      'div',
                      { className: 'col-auto mr-auto' },
                      reply.text,
                      _react2.default.createElement('br', null),
                      '~ ',
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: 'profile/' + reply.user.id },
                        reply.user.username
                      )
                    ) : _react2.default.createElement(
                      'div',
                      { className: 'col-auto mr-auto', style: { marginLeft: '10px' } },
                      _react2.default.createElement(_view.UpdateReply, {
                        onCreate: _this3.updateReply.bind(_this3, reply),
                        currentReply: reply
                      })
                    ),
                    currentUser == null ? null : currentUser.id !== reply.user.id ? null : [_react2.default.createElement(
                      'div',
                      { key: '1', className: 'col-auto' },
                      _react2.default.createElement(
                        'button',
                        {
                          onClick: function onClick() {
                            _this3.setState({ editShow: !_this3.state.editShow });
                          },
                          className: 'btn btn-success btn-sm'
                        },
                        'Edit'
                      )
                    ), _react2.default.createElement(
                      'div',
                      { key: '2', className: 'col-auto' },
                      _react2.default.createElement(
                        'button',
                        {
                          onClick: _this3.deleteReply.bind(_this3, reply),
                          className: 'btn btn-danger btn-sm'
                        },
                        'Delete'
                      )
                    )],
                    _react2.default.createElement(
                      'div',
                      { className: 'col-auto text-muted' },
                      _utils.DateUtils.relativeTime(reply.timestamp)
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(_view.CreateReply, { onCreate: this.createReply.bind(this) })
      );
    }
  }]);

  return Reply;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    user: state.user,
    reply: state.reply
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    createReply: function createReply(params) {
      return dispatch(_actions2.default.createReply(params));
    },
    getReplies: function getReplies(params) {
      return dispatch(_actions2.default.getReplies(params));
    },
    deleteReply: function deleteReply(entity) {
      return dispatch(_actions2.default.deleteReply(entity));
    },
    updateReply: function updateReply(entity, params) {
      return dispatch(_actions2.default.updateReply(entity, params));
    }
  };
};

var loadData = function loadData(store) {
  return store.dispatch(_actions2.default.getReplies());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Reply)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(9);

var _Header = __webpack_require__(32);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(5);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch(_actions2.default.currentUser());
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg navbar-dark bg-dark' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'navbar-brand', to: '/' },
          'Ghost-Hunters'
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'navbar-toggler',
            type: 'button',
            'data-toggle': 'collapse',
            'data-target': '#navbarSupportedContent',
            'aria-controls': 'navbarSupportedContent',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav mr-auto' },
            _react2.default.createElement(
              'li',
              { className: 'nav-item active' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/' },
                'Posts ',
                _react2.default.createElement(
                  'span',
                  { className: 'sr-only' },
                  '(current)'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/users' },
                'Users'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'nav-link', to: '/map' },
                'Map'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(34);

var _reduxThunk = __webpack_require__(35);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {
  configure: function configure(initialState) {
    // initialState can be null

    var reducers = (0, _redux.combineReducers)({
      user: _reducers.userReducer,
      post: _reducers.postReducer,
      profile: _reducers.profileReducer,
      reply: _reducers.replyReducer
    });

    if (initialState) {
      store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

      return store;
    }

    store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
  },

  currentStore: function currentStore() {
    return store;
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileReducer = exports.replyReducer = exports.postReducer = exports.userReducer = undefined;

var _userReducer = __webpack_require__(37);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _postReducer = __webpack_require__(38);

var _postReducer2 = _interopRequireDefault(_postReducer);

var _replyReducer = __webpack_require__(39);

var _replyReducer2 = _interopRequireDefault(_replyReducer);

var _profileReducer = __webpack_require__(40);

var _profileReducer2 = _interopRequireDefault(_profileReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default;
exports.postReducer = _postReducer2.default;
exports.replyReducer = _replyReducer2.default;
exports.profileReducer = _profileReducer2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  all: [],
  currentUser: null // signed in user
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = Object.assign({}, state);

  switch (action.type) {
    case _constants2.default.CURRENT_USER_RECEIVED:
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USERS_RECEIVED:
      newState['all'] = action.data;
      return newState;

    case _constants2.default.USER_CREATED:
      var array = newState.all ? Object.assign([], newState.all) : [];
      array.unshift(action.data);
      newState['all'] = array;
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USER_LOGGED_OUT:
      newState['currentUser'] = action.data;
      return newState;

    case _constants2.default.USER_DELETED:
      return _extends({}, state, {
        currentUser: action.data,
        all: state.all.filter(function (user) {
          return user !== action.data.id;
        })
      });

    default:
      return state;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  all: null
};

exports.default = function () {
  var _extends3;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.POST_CREATED:
      return _extends({}, state, _defineProperty({
        all: state.all.concat(action.data)
      }, action.data.id, action.data));

    case _constants2.default.RECORD_UPDATED:
      return _extends({}, state, (_extends3 = {}, _defineProperty(_extends3, action.data.id, action.data), _defineProperty(_extends3, 'all', state.all.map(function (item) {
        return item.id === action.data.id ? action.data : item;
      })), _extends3));

    case _constants2.default.RECORD_DELETED:
      var newState = _extends({}, state, {
        all: state.all.filter(function (item) {
          return item.id !== action.data.id;
        })
      });
      delete newState[action.data.id];

      return newState;

    case _constants2.default.FETCH_POSTS:
      var sortedData = action.data.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      return _extends({}, state, { all: sortedData });

    case _constants2.default.FETCH_POST:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    default:
      return state;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  all: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = Object.assign({}, state);
  var keys = Object.keys(newState);

  switch (action.type) {
    case _constants2.default.REPLY_CREATED:
      newState[action.data.postId].unshift(action.data);
      newState.all.unshift(action.data);
      return newState;

    case _constants2.default.GET_REPLIES:
      if (action.params.postId) {
        newState[action.params.postId] = action.data;
        return newState;
      }

      newState.all = action.data;
      return newState;

    case _constants2.default.USER_DELETED:
      keys.map(function (key) {
        newState[key] = newState[key].filter(function (reply) {
          return reply.user.id !== action.data.id;
        });
      });

      return newState;

    case _constants2.default.RECORD_DELETED:
      delete newState[action.data.id];

      return newState;

    case _constants2.default.REPLY_DELETED:
      keys.map(function (key) {
        newState[key] = newState[key].filter(function (reply) {
          return reply.id !== action.data.id;
        });
      });

      return newState;

    case _constants2.default.REPLY_UPDATED:
      keys.map(function (key) {
        newState[key] = newState[key].map(function (reply) {
          return reply.id === action.data.id ? action.data : reply;
        });
      });

      return newState;

    default:
      return state;
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var newState = _extends({}, state);
  switch (action.type) {
    case _constants2.default.GET_PROFILE:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    case _constants2.default.UPDATE_PROFILE:
      return _extends({}, state, _defineProperty({}, action.data.id, action.data));

    case _constants2.default.USER_DELETED:
      delete newState[action.data.id];
      return newState;

    default:
      return state;
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(42);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(9);

var _serializeJavascript = __webpack_require__(43);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(44);

var _routes = __webpack_require__(14);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (res, req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(Routes)
      )
    )
  ));

  var initialState = (0, _serializeJavascript2.default)(store.getState());

  var helmet = _reactHelmet.Helmet.renderStatic();

  res.render('index', { content: content, initialState: initialState, helmet: helmet });

  // return `
  //   <html>
  //     <head>
  //       ${helmet.title.toString()}
  //       ${helmet.meta.toString()}
  //       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  //     </head>
  //     <body>
  //       <div id="root">${content}</div>
  //       <script>
  //         window.INITIAL_STATE = ${serialize(store.getState())}
  //       </script>
  //       <script src="bundle.js"></script>
  //     </body>
  //   </html>
  // `;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg_json = __webpack_require__(8);
var turbo = __webpack_require__(12)({ site_id: pkg_json.app });
var vertex = __webpack_require__(13)({ site_id: pkg_json.app });
var router = vertex.router();

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', function (req, res) {
	res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' });
});

/*  This route render json data */
router.get('/json', function (req, res) {
	res.json({
		confirmation: 'success',
		app: pkg_json.app,
		data: 'this is a sample json route.'
	});
});

/*  This route sends text back as plain text. */
router.get('/send', function (req, res) {
	res.send('This is the Send Route');
});

/*  This route redirects requests to Turbo360. */
router.get('/redirect', function (req, res) {
	res.redirect('https://www.turbo360.co/landing');
});

module.exports = router;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg_json = __webpack_require__(8);
var turbo = __webpack_require__(12)({ site_id: pkg_json.app });
var vertex = __webpack_require__(13)({ site_id: pkg_json.app });
var router = vertex.router();

/*  This is a sample API route. */

router.get('/:resource', function (req, res) {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	});
});

router.get('/:resource/:id', function (req, res) {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	});
});

module.exports = router;

/***/ })
/******/ ]);