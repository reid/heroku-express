whoami
======

This is basically my Hello World app to test out [heroku's][heroku] experimental [node.js][node] support.

I normally run my node apps with [kiwi][kiwi] but heroku doesn't support that
currently.  You have to vendor all of your deps in your repo for now.  This app
should be a good starting point for most people.

Running
=======

    % rake setup
    % cd vendor
    % git clone git://github.com/atmos/express-session-redis.git
    % git clone git://github.com/fictorial/redis-node-client.git
    % node server.js


[heroku]: http://heroku.com
[node]: http://nodejs.org
[kiwi]: http://github.com/visionmedia/kiwi
