require.config({
    paths: {
        jquery: './jquery.min',
        index: './lib/index',
        cookie: './cookie'
    },
});

require(['index'], function(index) {
    index.render();
});
