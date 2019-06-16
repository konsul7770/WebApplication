const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');


const authRoutes = require('./routes/auth');

const app = new Koa();
const PORT = process.env.PORT || 1337;

// sessions
app.keys = ['super-secret-key'];
app.use(session(app));

// body parser
app.use(bodyParser());

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(authRoutes.routes());
//static folder
app.use(require('koa-static')('./src/server/views'));

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;