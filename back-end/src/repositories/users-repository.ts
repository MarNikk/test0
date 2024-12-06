import {db} from "../db/db"
import {registr} from "../models/registr"

// type User = {
//     password: string
//     name: string,
//     id: number,
// }

export const usersRepository = {

    getUser(id:registr.id){ // get user by id
        return db.users.find((item)=> item.id == id)
    },
    getUsers(){ // get all users
        return db.users
    },
    getlengthUsers(){ // get all users
        return db.users.length
    },
    createUser(user: registr.User){ // create user by info from params
        db.users.push(user)
    },
    updateUser(id:registr.id, what:"name"|"password", value:string){ // update user param (what : value)
        let a:any = db.users.find((item)=> item.id == id)?.id
        // let user: registr.User = db.users[a]
        // user[what]
         db.users[a][what] = value
    },
    dellUser(id:registr.id){ // dell user by id
        let a:any = db.users.findIndex((item)=> item.id == id)
        delete db.users[a];
    },

}