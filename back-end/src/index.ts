import express from 'express';
import path from 'path';


const PORT = 8080;


const app = express();
const fullup = path.join(__dirname, '../../');
console.log(fullup);

function send(name:string, req:any, res:any) {
    
    app.use(express.static(path.join(fullup, `front-end/${name}`)));
    res.sendFile(`${fullup}/front-end/${name}/index.html`);

}


app.get('/', (req, res) => {

    res.redirect("home");

})

app.get('/home', (req, res) => {

    send('home', req, res);

})

app.get('/about', (req, res) => {

    res.send('hello mega-men from my person');

})

app.get('/test', (req, res) => {

    res.send("hi it's test");
    // console.log(res.)dd

})

app.listen(PORT, () => {
    console.log(`port start on ${PORT} port...`);
})

