// const users_list_1 = [{
//   name: 'Jane Doe',
//   hobbies: ['soccer', 'boxing']
// }, {
//   name: 'John Doe',
//   hobbies: ['basketball']
// }];
//
// const users_list_2 = [{
//   name: 'Fowdew',
//   hobbies: ['WOW']
// }, {
//   name: 'Tamaman',
//   hobbies: ['stuff']
// }]
//
//
// // "Jane Doe's hobbies are : ...."
// const forEach = function(data, callback) {
//   for (var i = 0; i < data.length; i++) {
//     callback(data[i]);
//   }
// }
//
// const printUserHobbies = function(user) {
//  for (var user in users) {
//  console.log(users[user].name + '\'s hobbies are: ' + users[user].hobbies);
//  }
// }
//
// forEach(users_list_1, printUserHobbies);
//
//
//
// // const printUserHobbies = function(user) {
// //    console.log(user.name + "'s hobbies are: '" + user.hobbies);
// // }
// // users_list_1.forEach(printUserHobbies);
// //
// //
// // users_list_1.forEach()
//
// printUserHobbies(users_list_1);
// printUserHobbies(users_list_2);

const users_list_1 = [{
  name: 'Jane Doe',
  hobbies: ['soccer', 'boxing'],
  age: 29
}, {
  name: 'John Doe',
  hobbies: ['basketball'],
  age: 29
}];

const customMap = function(data, callback) {
  const mappedValues = [];
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    const result = callback(current);
  }
  return mappedValues;
}

const countHobbies = function(user) {
  return user.hobbies.length;
}

console.log(users_list_1.map(countHobbies));
