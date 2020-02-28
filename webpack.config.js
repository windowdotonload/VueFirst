const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin.js");

module.exports = {
    entry:path.join(__dirname,"./src/lib/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js",
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/lib/index.html"),
            filename:"index.html",
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(png|jpg|ttf)$/,use:"url-loader"},
            {test:/\.vue$/,use:"vue-loader"}
        ]
    }
}