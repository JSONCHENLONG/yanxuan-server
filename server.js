const express =require('express');

const api = require('./api');

const server = express();


server.get(api.CATELIST_URL, (req, res)=>{
    let data = require('./data/homeNavData.json');
    res.json({
        status: 0,
        message: 'ok',
        data
    });
})

server.listen(9090, 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功');
    }
})