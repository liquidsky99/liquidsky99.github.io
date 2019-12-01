function divider(Person) {
    console.log("\n====================================");
    console.log(Person);
    console.log("====================================\n");
}

divider('Person');

var myObject01 = {
	firstName: "George",
	lastName: "Washington"
};

var myObject02 = {
	firstName: "George",
	lastName: "Washington",
	fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	}
};


var myObject03 = {
    lengthFirst: function(){
        var first = "George";
		return first.length;
    }
}

var myObject04 = {
    lengthLast: function(){
        var last= "Washington";
		return last.length;
    }
}

var myObject05 = {
	a: 6,
	b: 10,
	lengthAdd: function() { return this.a + this.b; }
}; 

var myObject06 = {
	a: 6,
	b: 10,
	lengthSub: function() { return this.a - this.b; }
}; 

var myObject07 = {
	a: 6,
	b: 10,
	lengthMul: function() { return this.a * this.b; }
}; 

console.log('First Name: ' + myObject01.firstName);
console.log('Last Name: ' + myObject01.lastName);
console.log('Full Name: ' + myObject02.fullName());

function divider(calculator) {
    console.log("\n====================================");
    console.log(calculator);
    console.log("====================================\n");
}

divider('Calculator');

console.log('operand01 is the length of firstName: ' + myObject03.lengthFirst());
console.log('operand02 is the length of lastName: ' + myObject04.lengthLast());
console.log('Add length of first and lastNames: ' + myObject05.lengthAdd());
console.log('Subtract length of first and lastNames: ' + myObject06.lengthSub());
console.log('Multiply length of first anhd lastNames: ' + myObject07.lengthMul()); 







