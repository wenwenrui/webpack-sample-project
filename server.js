const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const graphqlHTTP = require('express-graphql')
 
const app = express()
const config = require('./webpack.config')

const compiler = webpack(config)
const Schema = require('./src/utils/schema')

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "Content-Type,access-token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}))

app.use(webpackHotMiddleware(compiler));
app.use('/graphql', graphqlHTTP({
    schema: Schema.schema,
    rootValue: Schema.root,
    graphiql: true
}))
app.listen(3000, function(){
    console.log('Example app listening on port 3000!\n')
})