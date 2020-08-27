class Meal {
    name;
    foods;
    dateModified;
    addFood(food) {
        this.foods.push(food);
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.foods.length; i++) {
            totalPrice += this.foods[i].price;
        }
        return totalPrice;
    }
    showname(){
        let totalName = "";
        for (let i = 0; i < this.foods.length; i++) {
            totalName += this.foods[i].name + ", ";
        }
        return totalName;
    }
    show() {
        console.log(`
            bữa ăn : ${this.name},
            các món ăn : ${this.showname()},
            số tiền: ${this.calculatePrice()}
        `);
    }
    constructor(name, foods, dateModified) {
        this.name = name;
        this.foods = foods;
        this.dateModified = new Date().toISOString()
    }
}
class VegetableMeal extends Meal {
    addFood(vegetableFood) {
        if (vegetableFood instanceof VegetableFood)
            this.foods.push(vegetableFood);
        else
            console.log("nhập sai loại thức ăn !");
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.foods.length; i++) {
            totalPrice += this.foods[i].price;
        }
        return (totalPrice * 85 / 100);
    }
    constructor(name, foods, dateModified) {
        super(name, foods, dateModified);
    }
}
class NonVegetableMeal extends Meal {
    addFood(nonVegetableFood) {
        if (nonVegetableFood instanceof NonVegetableFood)
            this.foods.push(nonVegetableFood);
        else
            console.log("nhập sai loại thức ăn !");
    }
    calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.foods.length; i++) {
            totalPrice += this.foods[i].price;
        }
        return (totalPrice * 95 / 100);
    }
    constructor(name, foods, dateModified) {
        super(name, foods, dateModified);
    }
}
class Food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}
class VegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}
class NonVegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

let raumuong = new VegetableFood("rau muong", "rồng xanh", 5000)
let raumuongxao = new VegetableFood("rau muong xao", "rồng xanh thêm tí dầu ăn", 15000)
let mi = new VegetableFood("mi trang", "bạch long", 15000)
let bangai = new NonVegetableFood("bạn gái của bạn", "mờ lem mò lem only", 1000000000000000000000000000)
let raumuong1 = new VegetableFood("rau muong1", "vẫn là rau muống nhưng loại 1", 4000)
let raumuong2 = new VegetableFood("rau muong2", "vẫn là rau muống nhưng loại 2", 50000)
let buatrua = new VegetableMeal("bua trua chay :D", [], "27/08/20")

buatrua.addFood(raumuong);
buatrua.addFood(raumuongxao);
buatrua.addFood(mi);
buatrua.addFood(raumuong1);
buatrua.addFood(raumuong2);
buatrua.addFood(bangai);

