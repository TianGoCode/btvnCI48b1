import { Lecturer } from "./Lecturer.js";
import { Student } from "./Student.js";
class Class {
    code;
    name;
    lecturer;
    students;
    constructor(name, code) {
        this.name = name;
        this.code = code;
        this.students = [];
    }
    //push students here
    set newLecturer(lecturer){
        if(lecturer instanceof Lecturer){
            this.lecturer = lecturer;
        }
    
    }
    addStudent(student){
        if(student instanceof Student){
            this.students.push(student)
        }
    }

    //find student, tra ve mang chua cac hs co ten nhu vay :v

    findStudent(name){
       let filterStd =  this.students.filter((att)=>{
            return att.name === name;
        })
        return filterStd;
    }
    betteCGrade(){
        let filterStd =  this.students.filter((att)=>{
            return att.point >= 6;
        })
        return filterStd;
    }
}


export{Class}