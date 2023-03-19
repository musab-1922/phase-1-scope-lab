var customerName = 'bob';

function myFunction() {
  return customerName;
}

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(name) {
  bestCustomer = name;
}

function overwriteBestCustomer(newName) {
  bestCustomer = newName;
}

function changeLeastFavoriteCustomer() {
  var leastFavoriteCustomer = 'Bob';
  leastFavoriteCustomer = 'Alice';
  console.log('Least favorite customer is now: ' + leastFavoriteCustomer);
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newName) {
  bestCustomer = newName;
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; 
  console.log('Least favorite customer is now: ' + leastFavoriteCustomer);
}

setBestCustomer();
console.log('Best customer is: ' + bestCustomer); 

overwriteBestCustomer('Jane');
console.log('Best customer is now: ' + bestCustomer); 

changeLeastFavoriteCustomer(); 

