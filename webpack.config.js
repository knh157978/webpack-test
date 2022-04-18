const path = require ('path')
const HtmlPlugin=require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')

module.exports={
    //parcel index.html
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',
    output:{
        // path:path.resolve(__dirname,'dist'),
        // filename:'main.js',
        clean:true //기존에 있던 파일 없애줌
    },
    module:{
     rules:[
         {
             test:/\.s?css$/,
             use:[
                 'style-loader',
                 'css-loader',
                 'postcss-loader',
                 'sass-loader'
             ]
        },
        {
            test:/\.js$/,
            use:[
                'babel-loader'
            ]
        }
                   
     ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                {from:'static'}
            ]
        })
    ],
    devServer : {
        host:'localhost'
    }
}