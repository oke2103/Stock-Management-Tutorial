// require는 Node.Js의 모듈 로딩 시스템
const express = require('express');
// body-parser : Client의 request를 사용할수 있게 해줌
const bodyParser = require('body-parser');
const app  = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));


app.get('/api/customers',(req,res) => {
    console.log("test");
    res.send({message : "Hello"});
});

app.listen(port, () => console.log(`Listing on port ${port}`));