import { Person } from "./Person.js"
class Lecturer extends Person{
    level;
    constructor(name,sex,level){
        super(name,sex);
        this.level = level;
    }
}
export{Lecturer}