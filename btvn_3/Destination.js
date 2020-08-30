class Destination {
    name;
    images;
    dateModified;
    constructor(name) {
        this.name = name;
        this.images = [];
        this.dateModified = new Date().toLocaleString();
    }
    set newImage(image) {
        if (image) {
            this.images.push(image);
        }
    }
    get info() {
        console.log(`Địa điểm : ${this.name}; Review : ${this.images.join(",\n")}; Ngày cập nhật : ${this.dateModified}`)
    }
  
}
export{Destination}


