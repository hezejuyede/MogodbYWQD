var formidable = require("formidable");                          //引入formidable
var readline = require('readline');                             //引入读取模块
var fs = require('fs');                                         //引入FS模块
var mongodb = require("../models/mongodb");                    //引入models操作数据模块
var md5 = require("../models/md5");                           //引入md5加密

var data = [
    {
        "id": "1",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "哈哈哈哈哈",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    },
    {
        "id": "2",
        "gc": "FI-SW-01",
        "wl": "P",
        "rk": "2",
        "dw": "3",
        "address":"eeee",
        "bm": "4",
        "ms": "5",
        "sl": "6",
        "js": "7",
        "tl": "8",
        "yd": "9",
        "data": "10",
        "date": "2018-11-28",
        "time": "09:00",
    }
];

//用户登录
exports.userLogin = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        var Password = md5(md5(password).substr(4, 7) + md5(password));
        mongodb.find("userInfo", {"username": fields.username}, (err, result) => {
            if (result.length == 0) {
                res.json("2");
                return;
            }
            var mongodbPassword = result[0].password;
            if (mongodbPassword == Password) {
                req.session.login = "1";
                res.json({
                    state: 1,
                    username: fields.username,
                });
            }
            else {
                res.json("-1")
            }
        })
    })
};

//管理员登录
exports.admUserLogin = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        var Password = md5(md5(password).substr(4, 7) + md5(password));
        mongodb.find("admInfo", {"admName": fields.username}, (err, result) => {
            if (result.length == 0) {
                res.json("2");
                return;
            }
            var mongodbPassword = result[0].admPassword;
            if (mongodbPassword == Password) {
                req.session.login = "1";
                res.json({
                    state: 2,
                    username: fields.username,
                });
            }
            else {
                res.json("-1")
            }
        })

    })
};


//用户注册
exports.userRegister = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        var Password = md5(md5(password).substr(4, 7) + md5(password));
        mongodb.find("userInfo", {"username": fields.username}, (err, result) => {
            if (err) {
                res.json("-4");
                return;
            }
            if (result.length !== 0) {
                res.json("-1");
            }
            else {
                mongodb.insertOne("userInfo", {
                    "username": fields.username,
                    "password": Password,
                    "phone": fields.phone,
                }, function (err, result) {
                    if (err) {
                        res.json("-2");
                    }
                    else {
                        res.json({
                            state: 1,
                            username: fields.username,
                        });
                    }
                })
            }
        })


    })
};


//管理员注册
exports.admRegister = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var password = fields.password;
        var Password = md5(md5(password).substr(4, 7) + md5(password));
        var code = fields.code;
        if (code == "10086") {
            mongodb.find("admInfo", {"admName": fields.username}, (err, result) => {
                if (err) {
                    res.json("-4");
                    return;
                }
                if (result.length !== 0) {
                    res.json("-1");
                }
                else {
                    mongodb.insertOne("admInfo", {
                        "admName": fields.username,
                        "admPassword": Password,
                        "admPhone": fields.phone,
                    }, function (err, result) {
                        if (err) {
                            res.json("-3");
                        }
                        else {
                            res.json({
                                state: 2,
                                username: fields.username,
                            });
                        }
                    })
                }
            })
        }
        else {
            res.json("-2")
        }
    })
};


//左侧导航
exports.YWHomeLeftNav = function (req, res, next) {

    var path = "C:/piweb/YWQD/F.txt";
    var r1 = readline.createInterface({
        input: fs.createReadStream(path)
    });

    r1.on('line', function (line) {
        res.json(line)
    })


};

//下载列表
exports.downloadList = function (req, res, next) {

    var path = "C:/piweb/YWQDDownload/F.txt";
    var r1 = readline.createInterface({
        input: fs.createReadStream(path)
    });

    r1.on('line', function (line) {
        res.json(line)
    })


};


//点击左侧显示右侧图形
exports.getObjectData = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var name = fields.name;
        res.json(name);
    })
};


//客户发送消息
exports.UserSay = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var userName = fields.userName;
        var Message = fields.Message;
        var time = fields.time;
        if (Message.length > 0) {
            mongodb.find("userInfo", {"username": userName}, function (err, result) {
                if (err) {
                    res.json("-2")
                }
                else {
                    var userPhone = result[0].phone;
                    mongodb.insertOne("userMessageList", {
                        "messageUserName": userName,
                        "messageContent": Message,
                        "messageTime": time,
                        "messagePhone": userPhone
                    }, function (err, result) {
                        if (err) {
                            res.json("-1")
                        }
                        else {
                            res.json("1")
                        }
                    })
                }

            })
        }
    })
};


//显示客户留言
exports.getMessageList = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var Page = fields.Page - 1;
        mongodb.find("userMessageList", {}, function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                var l = data.length;
                var page = Math.ceil(l / 10);
                mongodb.find("userMessageList", {}, {"pageamount": 10, "page": Page}, function (err, result) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.json({
                            "page": page,
                            "list": result
                        })
                    }
                })
            }
        });
    })
};


//删除客户留言
exports.deleteMessage = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        var UserName = fields.messageUserName;
        var Time = fields.messageTime;
        mongodb.deleteMany("userMessageList", {
            "messageUserName": UserName,
            "messageTime": Time
        }, function (err, result) {
            if (err) {
                res.json("-1")
            }
            else {
                res.json("1")
            }
        });
    })
};


//删除客户留言
exports.inputData = function (req, res, next) {
    res.json(data)
};

//删除客户留言
exports.setData = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        console.log(fields);
        res.json("1")
    })
};
