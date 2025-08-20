'use strict';

///////////////////////////////////////////////
// ///////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// currencies.forEach(function (value, index, map) {
//   console.log(`${index}: ${value}`);
// });

// const currencies2 = new Set(['USA', 'USA', 'USA', 'EUR', 'GBP']);
// currencies2.forEach(function (value, _, set) {
//   console.log(`${value} : ${value}`);
// });

const arr = [1, [2, 3], 4, [5, 6]];

const oneLineArr = [];

for (const i of arr) {
  if (Array.isArray(i)) {
    for (let j of i) {
      oneLineArr.push(j);
    }
  } else {
    oneLineArr.push(i);
  }
}
console.log(oneLineArr);

//LBANKIST APP

//Data;
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'standard',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'basic',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'standard',
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//UI for the deposit/withdraw

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const sortMovement = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  sortMovement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const change = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', change);
  });
};

// for user name

const createUsername = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(acc => acc[0])
      .join('');
  });
};

createUsername(accounts);

// to display the balance of the overall transactions with deposit and withdraw

const createDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.innerHTML = `${acc.balance}€`;
  console.log(acc);
};

// to display the balance of IN , Out , Interest

const calcDisplaySummary = function (acc) {
  const inValue = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.innerHTML = `${inValue}€`;

  const outValue = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.innerHTML = `${Math.abs(outValue)}€`;

  const interests = Math.trunc(
    acc.movements
      .filter(mov => mov > 0)
      .map(int => (int * acc.interestRate) / 100)
      .filter(mov => mov > 1)
      .reduce((acc, cur) => acc + cur, 0)
  );
  labelSumInterest.innerHTML = `${interests}€`;
};

const updateUI = function (acc) {
  // display movements
  displayMovement(acc.movements);
  // display balance
  createDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

//Event handler for changing the login user
let currentAccounts;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccounts = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccounts?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccounts.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    //clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //To update the UI
    updateUI(currentAccounts);
  } else if (currentAccounts?.pin !== Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Please Check your UserId and PWD`;
  }
});

// transfer the money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  ); // here we are find the reciever account what we are entering inthe transfer to input field

  inputTransferTo.value = inputTransferAmount.value = ''; //post transfering the amount to the receiver the input values will automatically became blank

  //here we are going to do the transfer of money from our end it will be - and receiver will be + on the movements array.after that we need to update the UI also for movement,summary,balance

  // before that we need to check some thing
  // 1. the amount input field must have the positive
  // 2. the transfering amount must not exceed the balance

  if (
    amount > 0 && //checking the amount is not in negative and we are sending a valid amount
    receiverAcc && //checking the user name exits or not
    currentAccounts.username !== receiverAcc.username && //we are giving a condition that the current username not sending the amount himself
    currentAccounts.balance >= amount // to check the current balance is greater than the amount we are going to share
  ) {
    currentAccounts.movements.push(-amount); // the amount that sender will have negative
    receiverAcc.movements.push(amount); // the amount the receiver will have positive
    //To update the UI
    updateUI(currentAccounts); //post changes we are updating the UI for the debit and credit for current user and receiver
  }
});

// console.log(accounts);

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccounts.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentAccounts.movements.push(amount);
  }
});

// close account feature
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccounts.username === inputCloseUsername.value &&
    currentAccounts.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccounts.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = `Your account has been closed ${currentAccounts.owner}`;
});

//sort the values

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccounts.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupByMovements = Object.groupBy(accounts, mov => {
  const accMovLength = mov.movements.length;
  if (accMovLength >= 8) return `Very Active Account`;
  if (accMovLength >= 6) return `Active Account`;
  if (accMovLength >= 1) return `Modrate Account`;
  return `InActive Account`;
});

console.log(groupByMovements);

const groupByType = Object.groupBy(accounts, acc => {
  return acc.type;
});

console.log(groupByType);

const x = Array.from({ length: 100 }, _ => Math.trunc(Math.random() * 6 + 1));
console.log(x);

document
  .querySelector('.balance__label')
  .addEventListener('click', function () {
    const arr = Array.from(document.querySelectorAll('.movements__value'), el =>
      Number(el.textContent.replace('€', ''))
    );
    arr.sort((a, b) => a - b);
    console.log(arr);

    const arr2 = [...document.querySelectorAll('.movements__value')].map(el =>
      Number(el.textContent.replace('€', ''))
    );
    arr2.sort((a, b) => a - b);
    console.log(arr2);
  });
// const lastindex = movements.findLast(mov => mov < 0);
// const lastIndexNumber = movements.findLastIndex(mov => mov < 0);
// console.log(lastindex, lastIndexNumber);

// console.log(
//   `Your latest large movement was ${
//     movements.length - movements.findLastIndex(mov => Math.abs(mov) > 1000)
//   } movements ago`
// );

// // some and every array methods

// includes and some are somewhere same for boolean value but in the some we can use condition but in includes we can't

// console.log(movements.includes(-130)); // here i can only give the value
// console.log(movements.some(mov => mov > 1500)); // but here i can use any condition to get the value
// console.log(movements.every(mov => mov > 0)); // some and every are same but every check all the all are satisfy the condition or not

// const onResult = accounts
//   .flatMap(mov => mov.movements)
//   .reduce((acc, mov) => mov + acc, 0);

// console.log(onResult);

////////////////////////////////////////
//sample and challenges

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.length);
// // const euroToUsd = 1.1;

// // const move = movements.map(mov => euroToUsd * mov);

// // console.log(move);

// const move = movements.map((mov, i) => {
//   console.log(
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
//   );
// });

// displayMovement(account1.movements);
////////////////////////////////////////////////////
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];
// const juliaShallow = dogsJulia.slice(1, -2);
// console.log(juliaShallow);

// // const bothData = [...juliaShallow, ...dogsKate];
// const bothData = juliaShallow.concat(dogsKate);
// console.log(bothData);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogCorrection = dogsJulia.slice();
//   dogCorrection.splice(0, 1);
//   dogCorrection.splice(2);
//   console.log(dogCorrection);
//   const bothData = dogCorrection.concat(dogsKate);
//   bothData.forEach(function (number, i) {
//     const age =
//       number > 5
//             `Dog number ${i + 1} is an adult, and is ${number} years old`
//           )
//         : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };
// // checkDogs(bothData);

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// const balance1 = movements.reduce((acc, cur) => acc + cur, 100);

// console.log(balance);

// const max = movements.reduce(function (acc, cur) {
//   if (acc < cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);

// console.log(max);

//////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (mov) {
//     if (mov <= 2) {
//       return 2 * mov;
//     } else if (mov > 2) {
//       return 16 + mov * 4;
//     }
//   });

//   const agefilter = humanAge.filter(mov => mov > 18);

//   const average = agefilter.reduce(
//     (acc, cur) => acc + cur / agefilter.length,
//     0
//   );
//   console.log(Math.trunc(average));
//   // const aboveHumanAge = humanAge.filter(mov => mov > 18);
//   // console.log(aboveHumanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // Coding Challenge #3

// /*
// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge2 = function (ages) {
//   const humanAge = ages
//     .map(mov => (mov <= 2 ? 2 * mov : 16 + mov * 4))
//     .filter(mov => mov > 18)
//     .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
//   console.log(Math.trunc(humanAge));
// };

// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// let account;

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account = acc;
//     break;
//   }
// }
// console.log(account);
