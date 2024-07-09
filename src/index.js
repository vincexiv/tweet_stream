const Rx = require('rx')
const WebSocketServer = require('ws').Server
const { TwitterApi } = require('twitter-api-v2')
const config = require('dotenv').config
config()

const T = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});