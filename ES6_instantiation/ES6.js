class Gold {
    constructor(){
        this.name = "Gold"
        this.num = 4
    }

    addProp(value){
        this.newProp = value
        return this;
    }
}

const blue = new Gold();
blue.name = "blue"

console.log(blue.addProp("test"))