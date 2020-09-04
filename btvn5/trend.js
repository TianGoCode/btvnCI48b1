// created by VuHoangTuan at 20200902 20:45. //
//                    ↓                       //
// Made by VHT, git: TianGocode              //




let nguyenAm = ['u', 'ú', 'ù', 'ũ', 'ủ', 'e', 'é', 'è', 'ẽ', 'ẻ', 'ê', 'ế', 'ễ', 'ề', 'ể', 'o', 'ó', 'ò', 'õ', 'ỏ', 'ô', 'ố', 'ồ', 'ỗ', 'ổ', 'ơ', 'ớ', 'ờ', 'ỡ', 'ở', 'a', 'á', 'à', 'ã', 'ả', 'â', 'ấ', 'ầ', 'ẫ', 'ẩ', 'ă', 'ắ', 'ằ', 'ẵ', 'ẳ', 'i', 'í', 'ì', 'ĩ', 'ỉ', 'ư', 'ứ', 'ừ', 'ữ', 'ử', 'ạ', 'ậ', 'ặ', 'ẹ', 'ệ', 'ọ', 'ộ', 'ợ', 'ụ', 'ự', 'ị', 'y', 'ý', 'ỳ', 'ỹ', 'ỵ', 'ỷ']

function funny() {
    let input = document.getElementById("str-in").value
    input = input.trim().toLowerCase()
   
    let start = []
    for (let i = 0; i < input.indexOf(" "); i++) {
        if (!nguyenAm.includes(input[i])) {
            start.push(input[i])
        } else {
            break
        }
    }
    let index = 0;
    let end = []
    for (let i = input.length - 1; i > input.lastIndexOf(" "); i--) {
        if (nguyenAm.includes(input[i])) {
            index = i
        }
    }
    for (let i = index; i < input.length; i++) {
        start.push(input[i])
    }

    let output = document.getElementById("str-out")


    output.value = input.charAt(0).toUpperCase() + start.join("").slice(1)
}

funny("nguyễn thị kim oanh")