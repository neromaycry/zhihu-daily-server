var request = require('superagent');

var root = 'http://news-at.zhihu.com/api/4';

var _api_base = function (req, res, next, url, success, failure) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    request('GET', root + url)
        .accept('json')
        .end(function (err, resp) {
            if (err) {
                console.log('api error, HTTP CODE: ' + res.status);
                return;
            };
            if (resp.body) {
                if (success) {
                    success(resp.body);
                } else {
                    res.send(resp.body);
                }
            } else {
                if (failure) {
                    failure(resp.body);
                } else {
                    console.log('error: ' + JSON.stringify(resp.body));
                }
            }
        });
};

var Api = {
    // @最新消息
    getLatestNews: function (req, res, next, success) {
        _api_base(req, res, next, '/news/latest');
    },
    // @消息内容获取与离线下载
    getNewsContent: function (req, res, next) {
        var id = req.params.id;
        _api_base(req, res, next, '/news/' + id);
    },
    // @过往消息
    getOldNews: function (req, res, next) {
        var date = req.params.date;
        _api_base(req, res, next, '/news/before/' + date);
    },
    // @新闻额外信息
    // 输入新闻的ID，获取对应新闻的额外信息，如评论数量，所获的“赞”的数量
    getNewsExtraInfo: function (req, res, next) {
        var id = req.params.id;
        _api_base(req, res, next, '/story-extra/' + id);
    },
    // @新闻对应长评论查看
    getLongComments: function (req, res, next) {
        var id = req.params.id;
        _api_base(req, res, next, '/story/' + id + '/long-comments');
    },
    // @新闻对应短评论查看
    getShortComments: function (req, res, next) {
        var id = req.params.id;
        _api_base(req, res, next, '/story/' + id + '/short-comments');
    },
    // @主题日报列表查看
    getThemesList: function (req, res, next) {
        _api_base(req, res, next, '/themes');
    },
    // @主题日报内容查看
    getThemesContent: function (req, res, next) {
        var id = req.params.id;
        _api_base(req, res, next, '/theme/' + id)
    },
    // @热门消息
    getHotNews: function (req, res, next) {
        _api_base(req, res, next, '/news/hot');
    }
};

module.exports = Api;