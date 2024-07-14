const Rx = require('rx')
const WebSocketServer = require('ws').Server
const { TwitterApi } = require('twitter-api-v2')
const config = require('dotenv').config
config()

function onConnect(ws){
    Rx.Observable.fromEvent(ws, 'message')
    .subscribe(function(data){
        const quake = JSON.parse(data)
        console.log(quake)
    })
}

const Server = new WebSocketServer({port: '8080'})
const connection = Rx.Observable.fromEvent(Server, 'connection')

const T = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

connection.subscribe(onConnect)