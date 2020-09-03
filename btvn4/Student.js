import { Person } from "./Person.js"
class Student extends Person{
    IdNo;
    SchoolYear;
    point;
    constructor(name,sex,IdNo,SchoolYear,point){
        super(name,sex);
        this.IdNo = IdNo;
        this.SchoolYear = SchoolYear;
        this.point = point;
    }
}
export{Student}