const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const graphqlHTTP = require('express-graphql')
 
const app = express()
const config = require('./webpack.config')

const compiler = webpack(config)
const Schema = require('./src/utils/schema')

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