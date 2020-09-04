let fname = document.getElementById("fname-input")
let lname = document.getElementById("lname-input")
let email = document.getElementById("email-input")
let pnumber = document.getElementById("pnumber-input")

let obj = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
}
let collection = "users"

async function addOne(obj) {
    await firebase.firestore().collection(collection).add({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        phoneNumber: obj.phoneNumber,
    })
}

function addData() {
    if(isNaN(Number(pnumber.value)) == false){
        obj.firstName = fname.value
        obj.lastName = lname.value.toLowerCase()
        //de lowercase phuc vu viec xoa ten o duoi :D
        obj.email = email.value
        obj.phoneNumber = Number(pnumber.value)
        addOne(obj)
        alert('Nhập thành công')
    } else {
        alert('vui lòng nhập đúng số điện thoại')
    }
}


// - In ra màn hình console thông tin của tất cả các users
async function readData() {
    let result = await firebase.firestore().collection(collection).get();
    for (let doc of result.docs) {
        console.log(doc.data())
    }
}

// - update tất cả 2 số đầu của phoneNumber = 84
// 			ví dụ sdt: 012345678 -> 842345678

async function updatePhoneNumber() {
    let result = await firebase.firestore().collection(collection).get();
    for (let doc of result.docs) {
        let newSdt = Number('84' + doc.data().phoneNumber)
        await firebase.firestore().collection(collection).doc(doc.id).update({
            phoneNumber : newSdt,
        })
    }
}


// - xóa các bản ghi có tên lastName trùng nhau
async function deleteData() {
    // tao 1 mang chua cac last name bi trung
    // lan theo tung phan tu mang do, kill 'em all!
    let result = await firebase.firestore().collection(collection).get();
    let del = [];
    for(let i = 0;i<result.docs.length;i++){
        for(let j =i+1;j<result.docs.length;j++){
            if(result.docs[i].data().lastName === result.docs[j].data().lastName){
                del.push(result.docs[i].data().lastName)
                break
            }
        }
    }
     del = del.filter(function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
    })  
    for (let item of del) {
        result = await firebase.firestore().collection(collection).where('lastName', '==', item).get();
        for (let doc of result.docs) {
            await firebase.firestore().collection(collection).doc(doc.id).delete()
        }
    }

}