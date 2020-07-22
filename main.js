// Your code here.

// getFirstName - returns the value of the
// firstName property of the given person object
const getFirstName = function(person) {
  return person.firstName;
}

// getLastName - returns the value of the 
// lastName property of the given person object 
const getLastName = function(person) {
  return person.lastName;
}

// getFullName - returns the value of the 
// firstName property plus the lastName property 
// with a space in the middle for the given person object 
const getFullName = function(person) {
  return `${person.firstName} ${person.lastName}`;
}

// setFirstName - changes the value of the firstName property 
// of the given person object to the given value 
const setFirstName = function(person, newFirstName) {
  person.firstName = newFirstName;
}

// setAge - changes the value of the age property 
// of the given person object to the given value 
const setAge = function(person, newAge) {
  person.age = newAge;
}

// giveBirthday - increments by 1 the age property of the 
// given person object, or gives them an age of 1 
// if they don't have that property 
const giveBirthday = function(person) {
  person.age = person.age + 1 || 1;
}

// marry - changes the married property of both given people
// to true and sets the spouseName property to be equal to the full name
// of the other person
const marry = function(person1, person2) {
  person1.married = true;
  person1.spouseName = getFullName(person2);

  person2.married = true;
  person2.spouseName = getFullName(person1);
}

// divorce - changes the married property of both given people
// to false and removes the spouseName property entirely from both
// parties
const divorce = function(person1, person2) {
  person1.married = false;
  delete person1.spouseName;

  person2.married = false;
  delete person2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
