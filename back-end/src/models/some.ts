export const registrModels = {
    UserAccount: class {
        name: string;
        id: number;
        password: string;
       
        constructor(name: string, password: string, id: number) {
            this.name = name;
            this.id = id;
            this.password = password;
        }
    }
} 