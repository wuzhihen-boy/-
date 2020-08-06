require.config({
    paths: {
        jquery: './jquery.min',
        login: './lib/login',
        cookie: './cookie'
    }
});

require(['login'], function(login) {
    login.render();
});