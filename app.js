const http = require('http');
const url = require('url');
const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy

const app = http.createServer((req, res)=>{
    console.log("Petició rebuda");
    
    if(req.url.includes("/color") && req.method=="GET"){
        var adr = req.headers.host + req.url;
        console.log(adr);
        var q = url.parse(adr, true);
        res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
        if(!q.query.variant){
            res.write(colors[Math.floor(Math.random()*colors.length)]);
        }else if(q.query.variant=="red"){
            res.write(`${colors[0]}`);
        }else if(q.query.variant=="green"){
            res.write(`${colors[1]}`);
        }else if(q.query.variant=="blue"){
            res.write(`${colors[2]}`);
        }
        res.end();
    }else{
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.write(`<h1>Bienvenido al servidor!</h1>`);
        res.write(`<h4>Para obtener un color pon el endpoint /color en la url</h4>`);
        res.end();
    }
});

app.listen(3000);