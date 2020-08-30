import {
    Destination
} from "./Destination.js";

class DestinationList {
    destinations;
    dateModified;
    addDestination(destination) {
        if (destination instanceof Destination) {
            this.destinations.push(destination);
        } else {
            console.log("nhập sai địa điểm");
        }
    }
    findDestination(name) {
        for (let i = 0; i < this.destinations.length; i++) {
            if (name.toUpperCase() === this.destinations[i].name.toUpperCase()) {
                console.log(this.destinations[i]);
            }
        }
    }
    getTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.destinations.length; i++) {
            let tmp = this.destinations[i];
            if (tmp.constructor.name === "Restaurant"){
                total += tmp.buffetPrice;
            } else if(tmp.constructor.name === "Park" || tmp.constructor.name === "Museum" ){
                total += tmp.ticketPrice;
            }
        }
       console.log(`Chuyến đi dự tính hết: ${total} đồng`)
    }
    constructor() {
        this.destinations = [];
        this.dateModified = new Date().toLocaleString();
    }
}
export {
    DestinationList
}