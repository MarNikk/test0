// namespasess
export declare namespace registr {
    type User = {
        password: string,
        name: string,
        id: registr.id,
    }
    type id = number

}

// get functions
export const registrModels = {
    UserAccount: class implements registr.User { 
        name: string;
        id: registr.id;
        password: string;
       
        constructor(name: string, password: string, id: registr.id) {
            this.name = name;
            this.id = id;
            this.password = password;
        }
    }


} 