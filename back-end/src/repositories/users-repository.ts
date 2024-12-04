import {db} from "../db/db"

type User = {
    password: string
    name: string,
    id: number,
}

export const usersRepository = {

    getUser(id:number){ // get user by id
        return db.users.find((item)=> item.id == id)
    },
    getUsers(){ // get all users
        return db.users
    },
    getlengthUsers(){ // get all users
        return db.users.length
    },
    createUser(user:User){ // create user by info from params
        db.users.push(user)
    },
    updateUser(id:number, what:string, value:string){ // update user param (what : value)
        let a:any = db.users.find((item)=> item.id == id)
        a[what] = value
    },
    dellUser(id:number){ // dell user by id
        let a:any = db.users.findIndex((item)=> item.id == id)
        delete db.users[a];
    },

}