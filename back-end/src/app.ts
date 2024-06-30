import express from 'express';
import path from 'path';

import { homeRourter } from './routs/home';
import { testRourter } from './routs/test';
import { passwordRourter } from './routs/password';


export const app = express();
export const fullup = path.join(__dirname, '../../');
console.log(fullup);

export function send(name:string, req:express.Request, res:express.Response) {
    
    app.use(express.static(path.join(fullup, `front-end/${name}`)));
    res.sendFile(`${fullup}/front-end/${name}/index.html`);

}

app.use('/', homeRourter)
app.use('/password', passwordRourter)
app.use('/test', testRourter)



