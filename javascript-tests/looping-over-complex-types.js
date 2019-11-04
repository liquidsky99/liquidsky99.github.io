function divider(){
    console.log('-------------------------------------');
    console.log('');
    console.log('-------------------------------------');
}

const myArray = [];

const numbers = [1,2,3,5,7];

console.log(numbers);

console.log('Fourth item:', numbers[3]);
console.log(numbers[0]);
console.log('Length:', numbers.length);
console.log('Number 3', numbers[numbers.length - 3]);
numbers.push(25);
console.log(numbers);
numbers.pop();
console.log(numbers);

divider();

const cloudy = true;
const items = [1, 'two', [3,4], cloudy, null];
console.log(items);

for (let i = 0; i < items.length; i++) {
    //console.log('value of i:', i);
    console.log('item:',items[i]);
}         

divider();

for (let item of items) {
    console.log('item:',items);
}

divider();

const files = ["bundle.js", "*.js.map", ".c9"];

console.log(fileNames.split(', '));

const fileNames = "bundle.js, *.js.map, .c9";

console.log(fileNames.split(', '));

divider();

const emptyObject = {};
const smallNumbers = {
    one:1,
    two:2,
    three:3
}
console.log("Object:", myObject, smallNumbers);

divider();

const myObject = {
    five: 5,
    six: 'six'
};            

console.log(myObject.five);
console.log(myObject.six);

myObject.newItem = 'This is a new item in my object.'
    console.log(myObject.five);
    console.log(myObject.six);
    console.log('myObject.newItem', myObject);

divider();

items.push(myObject);
console.log(items);
        
