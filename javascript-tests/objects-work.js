
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
	console.log('First Name: ' + myObject01.firstName);
	console.log('Last Name: ' + myObject01.lastName);
	console.log('Full Name: ' + myObject02.fullName());

function divider(calculator) {
    console.log("\n====================================");
    console.log(calculator);
    console.log("====================================\n");
}

var calculator = {
	operand01: "",
	operand02: ""
}
	calculator.operand01 = myObject01.firstName;
	calculator.operand02 = myObject01.lastName;

function lengthAdd(operand01, operand02)
{
	return operand01.length + operand02.length;
}

function lengthSub(operand01, operand02)
{
	return operand01.length - operand02.length;
}

function lengthMul(operand01, operand02)
{
	return operand01.length * operand02.length;
}


divider('Calculator');

console.log('Add length of first and lastNames: ' + lengthAdd(calculator.operand01, calculator.operand02));
console.log('Subtract length of first and lastNames: ' + lengthSub(calculator.operand01, calculator.operand02));
console.log('Multiply length of first and lastNames: ' + lengthMul(calculator.operand01, calculator.operand02));








