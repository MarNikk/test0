import {Router} from 'express'
import {send} from '../app' 

export const homeRourter = Router();

homeRourter.get('/', (req, res) => {

    res.redirect("home");

})

homeRourter.get('/home', (req, res) => {

    send('home', req, res);

})

homeRourter.get('/about', (req, res) => {

    res.send('hello mega-men from me');

})