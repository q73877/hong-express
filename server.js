const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());

//中间件使用静态资源托管

app.use(express.static('public'));

app.get('/',(req,res) => {

    console.log(req.query)
    res.send(req.query.name);
});
app.post('/handLogin',(req,res) => {
    console.log(req.body);
    res.send('hello');
})

//cookie相关
app.get("/setCookie",(req,res) => {
    res.cookie('goods','张三',{
        maxAge : 1000*60*10
    })

    res.send('cookie设置成功')
})

app.get('/getCookie',(req,res) => {
    console.log(req.cookies);
    //res.clearCookie()
    res.send('获取cookie成功');
})

app.get('/hello/:agg',(req,res) => {
    console.log(req.params);
    console.log(req.get('Accept-Encoding'));
    
    res.send('jsdh');
})

app.listen(3000);