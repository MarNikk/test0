import {Router} from 'express'
import {json} from 'express';
import {send} from '../app' 
import {db} from '../db/db.js'

export const registrRourter = Router();

registrRourter.use(json());

registrRourter.get('/', (req, res) => {
    res.type('application/json').json(JSON.stringify({"user": "1234567890"})).status(200);
    
})
registrRourter.post('/test/', (req, res) => {
    // console.log('1');
    console.log(req.body);
    // console.log(req.query);
    res.sendStatus(201)
})
registrRourter.get('/getUsers', (req, res) => {
    res.status(200).json(JSON.stringify(db.users));
})
registrRourter.get('/getUsers/:name', (req, res) => {
    console.log('gijgfsk')
    if(req.params.name){
        let a = db.users
        a = a.filter(p => p.id.indexOf(req.params.name) > -1)
        res.status(200).json(JSON.stringify(a));
    }else{
        res.status(200).json(JSON.stringify(db.users));
    }
})
registrRourter.post('/addUsers', (req, res) => {
    let a = (req.body);  //JSON.parse
    db.users.push(a);
    res.status(201);
})

