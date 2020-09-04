

    // created by VuHoangTuan at 20200902 20:45. //
    //                    ↓                       //
    // Made by VHT, git: TianGocode              //

// file này tạo ra vs mong muốn đú trend và kiếm tiền <(")
// cho 1 string bat ky`, khong dau
let str = "pham thanh huyen"
//tim 2 khoang trong dau cuoi
let space = []
space[0]= str.indexOf(" ")
space[1] = str.lastIndexOf(" ")



//mang chua nguyen am de loc tu :v
let nguyenAm = ['u', 'e', 'o', 'a', 'i']
//khoi tao mang chua tu dau va tu cuoi

let start = []
for (let i = 0; i < space[0]; i++) {
    start.push(str[i])
}
//loc
let index = 0
 for(let i = 0; i<start.length;i++){
    for(let j = 0; j<nguyenAm.length;j++){
        if(start[i]===nguyenAm[j]){
            index = i
            break
        }
      
    }
}
start.splice(index,start.length-index)
console.log(index);

let end = []
for (let i = str.length - 1; i > space[1]; i--) {
    end.push(str[i])  
}
//loc
end.reverse()

for(let i = 0; i<end.length;i++){
    for(let j = 0; j<nguyenAm.length;j++){
        if(end[i]===nguyenAm[j])
        index = i
        break
    }
}
end.splice(0,index)
console.log(str);
console.log((start.concat(end)).join(''))
//phần này tôi lười thêm trường hợp có dâu quá :(((((, góp vui tí xem thầy vs cô có thêm cách nào ngắn không thôi chứ cái này thấy cồng kềnh thật :))