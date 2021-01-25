'use strict';

import users from './users.js';

// ===============================Task-1==================================
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   return users.map(({ name }) => name);
// };

// console.log(getUserNames(users));
// [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr',
//   'Blackburn Dotson',
//   'Sheree Anthony',
// ];

// ===============================Task-2==================================

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
//   // твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ===============================Task-3==================================

// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(({ name }) => name);
// };

// console.log(getUsersWithGender(users, 'male'));
// ['Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson'];

// ===============================Task-4==================================

// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => !isActive);
// };

// console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ===============================Task-5==================================

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ===============================Task-6==================================

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) =>
//   users.filter(({ age }) => age >= min && age <= max);

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ===============================Task-7==================================

// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users =>
//   users.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

// ===============================Task-8==================================

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ===============================Task-9==================================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   const sortingByName = (userA, userB) => {
//     if (userA.friends.length > userB.friends.length) {
//       return 1;
//     }
//     if (userA.friends.length < userB.friends.length) {
//       return -1;
//     }
//     if (userA.friends.length === userB.friends.length) {
//       return 0;
//     }
//   };
//   return users.sort(sortingByName).map(user => user.name);
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head',
// 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ===============================Task-10==================================

// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   let result = [];
//   users.forEach(user => {
//     user.skills.forEach(skill =>
//       !result.includes(skill) ? result.push(skill) : '',
//     );
//   });
//   return result.sort();
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure',
// 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// ===============================Task-10==================================
const getSortedUniqueSkills = users => {
  return users
    .reduce((acc, { skills }) => acc + skills, '')
    .split(',') //18 ?!?!???!
    .filter((skill, index, arr) => arr.indexOf(skill) == index)
    .sort();
};

//NEED TO FIX!!!
