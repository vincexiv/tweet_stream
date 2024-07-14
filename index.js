const Rx = require('rx')
const WebSocketServer = require('ws').Server
const { TwitterApi } = require('twitter-api-v2')
const config = require('dotenv').config
config()

function onConnect(ws){
    console.log("Client connected on port 8080")
}

const Server = new WebSocketServer({port: 8080})
const connection = Rx.Observable.fromEvent(Server, 'connection')

const T = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

connection.subscribe(onConnect)