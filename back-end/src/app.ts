    // import main libs
import express from 'express';
import path from 'path';
    // import routs
import { homeRourter } from './routs/home';
import { testRourter } from './routs/test';
import { registrRourter } from './routs/registr';

    // config main constants
export const app = express();
export const fullup = path.join(__dirname, '../../');
console.log(`fullup: ${fullup}`);
    // config main functions
export function send(name:string, req:express.Request, res:express.Response) {
    
    app.use(express.static(path.join(fullup, `front-end/${name}`)));
    res.sendFile(`${fullup}/front-end/${name}/index.html`);

}

    // routing all routs
app.use('/', homeRourter)
app.use('/registr', registrRourter)
app.use('/test', testRourter)



