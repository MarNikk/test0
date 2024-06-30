import {Router} from 'express'
import {send} from '../app' 

export const testRourter = Router();

testRourter.get('/test', (req, res) => {

    res.send("hi it's test");
    // console.log(res.)dd

})
