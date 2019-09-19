//1-4
var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

var sorted = friends.sort();
sorted.reverse();
// console.log(sorted);

//5
var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

var allFriends = myFriends.concat(yourFriends);
var sortedFriends = allFriends.sort();
// console.log(allFriends);

//6-8

var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

var theIndex = foods.indexOf('Pho');
// console.log(theIndex - 1);
var donuts = foods.indexOf('Donuts');
foods.splice(donuts, 1);
// console.log(foods);
var portion = foods.slice(4, 9); 
// console.log(portion);

//9

var word = "Space";

var word2 = word.split('');
word2[2] = 'i';
var word3 = word2.join('');
// console.log(word3);

//10

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var sorted1 = ages.sort();
console.log(sorted1);