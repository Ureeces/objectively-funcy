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
