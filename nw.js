let Service = require('node-windows').Service;

let svc = new Service({
    name: 'node_test',    //服务名称
    description: '测试项目服务器', //描述
    script: 'C:/Users/15744/Desktop/广安项目/12.3/MogodbYWGA/app.js' //nodejs项目要启动的文件路径
});

svc.on('install', () => {
    svc.start();
});

svc.install();
