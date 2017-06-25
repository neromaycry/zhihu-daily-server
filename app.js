var restify = require('restify');
var Api = require('./api');

var server = restify.createServer();
server.get('/news/latest', Api.getLatestNews);
server.get('/news/:id', Api.getNewsContent);
server.get('/news/before/:date', Api.getOldNews);
server.get('/story-extra/:id', Api.getNewsExtraInfo);
server.get('/story/:id/long-comments', Api.getLongComments);
server.get('/story/:id/short-comments', Api.getShortComments);
server.get('/themes', Api.getThemesList);
server.get('/theme/:id', Api.getThemesContent);
server.get('/news/hot', Api.getHotNews);

server.listen(8899, function () {
    console.log('%s listening at %s', server.name, server.url);
});