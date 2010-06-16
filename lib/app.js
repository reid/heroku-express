// Example Express App on Heroku - Copyright Corey Donohoe <atmos@atmos.org> (MIT Licensed)
var redisStore = require('express/plugins/session.redis').RedisStore

configure(function() {
  set("root", __dirname)

  use(Flash)
  use(Logger)
  use(Cookie)
  use(MethodOverride)
  use(Static, { path: require("path").join(__dirname, "..", "public") })
  use(Session, { dataStore: redisStore, lifetime: (15).minutes, reapInterval: (1).minute })
  enable("show exceptions")
})

get("/", function() {
  this.session['visits'] = 0
  this.render("index.html.haml", {
    locals: {
      remoteIp: this.connection.remoteAddress
    }
  })
})

get("/next", function() {
  this.session['visits'] += 1
  this.render("index.html.haml", {
    locals: {
      remoteIp: this.connection.remoteAddress
    }
  })
})

run(parseInt(process.env.PORT || 8000), null)
