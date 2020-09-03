person1={
    name:"osccho"
}
person2={
    name:"osccho"
}
person3={
    name:"123"
}



var x = [person1,person2,person3]
cac = "osccho"

console.log(x)
var b = x.filter((a)=>{
    return a.name == cac
})
console.log(b)