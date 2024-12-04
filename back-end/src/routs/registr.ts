import {Router} from 'express'
import {json} from 'express';
import {send} from '../app' 
import {db} from '../db/db.js'

import { registrModels } from '../models/some';

import {usersRepository} from '../repositories/users-repository';

export const registrRourter = Router();

registrRourter.use(json());

registrRourter.get('/', (req, res) => {
    res.type('application/json').json(JSON.stringify({"user": "1234567890"})).sendStatus(200);
})
registrRourter.post('/test/', (req, res) => {
    // console.log('1');
    console.log(req.body);
    // console.log(req.query);
    res.sendStatus(201)
})
registrRourter.get('/getUsers', (req, res) => {
    res.json(JSON.stringify(usersRepository.getUsers())).sendStatus(200);
})
// registrRourter.get('/getUsers/:name', (req, res) => {
//     console.log('gijgfsk')
//     if(req.params.name){
//         let a = db.users
//         a = a.filter(p => p.id.indexOf(req.params.name) > -1)
//         res.status(200).json(JSON.stringify(a));
//     }else{
//         res.status(200).json(JSON.stringify(db.users));
//     }
// })
registrRourter.post('/addUser', (req, res) => {
    console.log(1)
    let length = usersRepository.getlengthUsers()
    console.log(2)
    let user = new registrModels.UserAccount(req.body.name, req.body.password, length+1)
    console.log(3)
    usersRepository.createUser(user)

    res.sendStatus(201);
})

