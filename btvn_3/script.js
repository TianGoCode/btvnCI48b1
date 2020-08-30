import {
    DestinationList
} from "./DestinationList.js";
import {
    Park
} from "./Park.js";
import {
    Museum
} from "./Museum.js";
import {
    Restaurant
} from "./Restaurant.js";
var yakimono = new Restaurant("Yakimono", 190000);
var gogi = new Restaurant("Gogi", 250000);
yakimono.newImage = "https://yakimono.com.vn/temp/-uploaded-2019-08-menu%20moi_trang%201%20menu%20moi_cr_420x275.jpg";
yakimono.newImage = "https://aeonmall-hadong.com.vn/wp-content/uploads/2019/08/nh-gian-hang-2-750x468.jpg";
var bthn = new Museum("Bảo tàng Hà Nội", 60000)
bthn.newImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Flaodong.vn%2Fvan-hoa%2Fvi-sao-bao-tang-2300-ti-tai-ha-noi-thuong-xuyen-vang-nhu-chua-ba-danh-636141.ldo&psig=AOvVaw0faBH40QvAmyyVnXPvx9c5&ust=1598882109351000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjt5pOKw-sCFQAAAAAdAAAAABAD";

bthn.newImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdidauchoigi.com%2Fbao-tang-ha-noi.html&psig=AOvVaw0faBH40QvAmyyVnXPvx9c5&ust=1598882109351000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjt5pOKw-sCFQAAAAAdAAAAABAJ";


var cvys = new Park("Công viên Yên Sở", 40000);
cvys.newImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel360.vn%2Fvi%2Fchia-se%2Fkinh-nghiem-du-lich-ha-noi%2Fcong-vien-yen-so-58.html&psig=AOvVaw3RKT4YVxxnixc1SDbJVeye&ust=1598882275490000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPji5uSKw-sCFQAAAAAdAAAAABAz";

let day1 = new DestinationList();
day1.addDestination(cvys);
day1.addDestination(bthn);
day1.addDestination(yakimono);
class xeday extends Restaurant {}
let xebo = new xeday("xe đẩy bán thịt bò", 10000);

day1.addDestination(xebo);

//thêm vào không bị sao, nghĩa là add được kế thừa của class bé @@
//theo mình hiểu thì về cơ bản như class cháu vẫn kế thừa được từ class ông thôi :D 

day1.findDestination("Công viên yên Sở")
day1.getTotalPrice();
console.log(day1);
export {
    yakimono,
    bthn,
    gogi,
    cvys
};