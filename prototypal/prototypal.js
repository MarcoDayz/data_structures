const gold = {
    name: "Gold",
    num: 4,
    method: function(){
        return `my name is ${this.name} and ${this.descr}`
    }
}


//creates new object using the existing passed in object as a prototype
const rose = Object.create(gold)
//give rose some properties
rose.name = "Rose";
rose.descr = "This is Red's description";

console.log(gold)
// console.log(rose.method());

const blue = Object.create(gold);
blue.name = "Blue";
blue.descr = "This is Blue's description";


//both rose and blue prototype chain to method fn and returns the strings
console.log(rose.method());
console.log(blue.method());