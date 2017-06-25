# zhihu-daily-server

* 为解决知乎日报接口跨域问题写的 Node 服务器，只做了一件事——数据转发
* Github项目地址：[https://github.com/neromaycry/zhihu-daily-server](https://github.com/neromaycry/zhihu-daily-server.git)

## 特别感谢

[知乎日报API分析](http://blog.csdn.net/fanpeihua123/article/details/51210499)

## 声明

以下所有 API 均由知乎（Zhihu.Inc）提供，本人灵感均来自[知乎日报 API 分析](http://blog.csdn.net/fanpeihua123/article/details/51210499)，对于原来的分析进行了一些个人的整改，如有不当之处请告知本人，本人立即处理此内容。获取与共享之行为或有侵犯知乎权益的嫌疑。若被告知需停止共享与使用，本人会及时删除此页面与整个项目。请您了解相关情况，并遵守知乎协议。


## Server
* 使用 Nodejs + Restify 开发
* 实现 最新消息，消息内容获取与离线下载，过往消息查看，新闻额外信息，新闻对应长评论查看，新闻对应短评论查看，主题日报列表查看，主题日报内容查看，热门消息

## Run

`npm install`
`node app.js`


## Api

### 最新消息
GET /news/latest

### 消息内容获取与离线下载
GET /news/:id

### 过往消息
GET /news/before/:date

### 新闻额外信息
GET /news/:id

### 新闻对应长评论查看
GET /story/:id/long-comments

### 新闻对应短评论查看
GET /story/:id/short-comments

### 主题日报列表查看
GET /themes

### 主题日报内容查看
GET /theme/:id

### 热门消息
GET /news/hot

