// created by VuHoangTuan at 20200902 12:28.
// 
// Made by VHT, git: TianGocode


import {Class} from "./Class.js"
import {Lecturer} from "./Lecturer.js"
import {Student} from "./Student.js"

let class1 = new Class("csdl","IT4411");
let lec1 = new Lecturer("Nguyễn Văn A","male","professor")
class1.newLecturer = lec1;
let std1 = new Student("vht","male","20175995","2017-2022",10);
let std2 = new Student("vht","female","20175995","2017-2022",6);
let std3 = new Student("vht1","male","20175995","2017-2022",7);
let std4 = new Student("vht2","male","20175995","2017-2022",5);
class1.addStudent(std1)
class1.addStudent(std2)
class1.addStudent(std3)
class1.addStudent(std4)

console.log(class1.betteCGrade())
