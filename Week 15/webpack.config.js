module.exports = {
    entry:"./animation-demo.js",  //入口
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"],
                        plugins:[["@babel/plugin-transform-react-jsx",{pragma:"createElement"}]]
                    }
                }
            }
        ]
    }
}