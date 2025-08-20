// // Coding Challenge #4

// /*
// This time, Julia and Kate are studying the activity levels of different dog breeds.

// YOUR TASKS:
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// TEST DATA:
// */

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// //1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// const huskyWeight = breeds.find(hus => hus.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// //2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

// const need = ['running', 'fetch'];

// const dogBothActivities = breeds.find(
//   act => act.activities.includes('fetch') && act.activities.includes('running')
// ).breed;
// console.log(dogBothActivities);

// // 3. Create an array "allActivities" of all the activities of all the dog breeds

// const allActivities = breeds.flatMap(act => act.activities);
// console.log(allActivities);

// //4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(bre => bre.activities.includes('swimming'))
//       .flatMap(bre => bre.activities)
//       .filter(bre => bre !== 'swimming')
//   ),
// ];
// console.log(swimmingAdjacent);

// // 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

// console.log(breeds.every(avg => avg.averageWeight > 10));

// // 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// console.log(breeds.some(act => act.activities.length >= 3));

// //BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// const heavy = breeds
// //   .filter(bre => bre.activities.includes('fetch'))
// //   .map(act => act.averageWeight);
// // const heavyBreed = Math.max(...heavy);
// // console.log(heavyBreed);
// //Data;
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   type: 'standard',
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   type: 'basic',
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
//   type: 'premium',
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'standard',
// };

// const accounts = [account1, account2, account3, account4];

// const primaryAcc = accounts.flatMap(acc => acc.movements);
// console.log(primaryAcc);

// const bankDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);
// console.log(bankDeposits);

// const Depositsabove1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur) => (cur >= 1000 ? ++sum : sum), 0); //++ sum is a prefixed operator
// console.log(Depositsabove1000);

//3.

// const { withdraw, deposit } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       sum[cur > 0 ? 'deposit' : 'withdraw'] += cur;
//       return sum;
//     },
//     { deposit: 0, withdraw: 0 }
//   );

// console.log(withdraw, deposit);

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       sum[cur > 0 ? 'deposit' : 'withdraw'] += cur;
//       return sum;
//     },
//     { deposit: 0, withdraw: 0 }
//   );

// console.log([...Object.entries(sums)]);
// const { withdraw, deposit } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       sum[cur > 0 ? 'deposit' : 'withdraw'] += cur;
//       return sum;
//     },
//     { deposit: 0, withdraw: 0 }
//   );

// console.log([withdraw, deposit]);

// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
//   // const captilize = function (word) {
//   //   return word[0].toUpperCase() + word.slice(1);
//   // };
//   const captilize = str => str[0].toUpperCase() + str.slice(1);

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map((word, i) =>
//       exceptions.includes(word) && i != 0 ? word : captilize(word)
//     )
//     .join(' ');
//   return titleCase;
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

const recFood = function (dogs) {
  dogs.forEach(function (wei) {
    wei.recommendedFood = Math.trunc(wei.weight ** 0.75 * 28);
  });
};
recFood(dogs);

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const findSarahDog = function (dogs) {
  dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(
    `it's eating ${
      dogs.recommendedFood > dogs.curFood ? 'too much' : 'too little'
    }.`
  );
};

findSarahDog(dogs);

//3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).

const ownersTooMuch = dogs
  .filter(own => own.recommendedFood < own.curFood)
  .flatMap(own => own.owners);

const ownersTooLittle = dogs
  .filter(own => own.recommendedFood > own.curFood)
  .flatMap(own => own.owners);
console.log(ownersTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

const dogsEatingOk = dogs.every(
  ans =>
    ans.curFood > ans.recommendedFood * 0.9 &&
    ans.curFood < ans.recommendedFood * 1.1
);
console.log(dogsEatingOk);

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(dogs.filter(checkEatingOkay));

//8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

const groupDogs = Object.groupBy(dogs, dog => {
  if (dog.recommendedFood === dog.curFood) return 'Exact';
  if (dog.recommendedFood > dog.curFood) return 'too-little';
  if (dog.recommendedFood < dog.curFood) return 'too-much';
});

console.log(groupDogs);

//9. Group the dogs by the number of owners they have

const groupByOwners = Object.groupBy(dogs, dog => {
  const owners = dog.owners.length;
  return owners > 2
    ? 'Three Owners'
    : owners < 2
    ? 'Single Owner'
    : 'Two Owners';
});

console.log(groupByOwners);

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const sortdogs = function (dog) {
  return dog.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
};

const output = sortdogs(dogs);
console.log(output);

// const sortdogs = dogs.map(dog => dog.recommendedFood).sort((a, b) => a - b);

// console.log(sortdogs);

console.log(dogs);
