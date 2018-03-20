var apples = 14;
console.log(apples);

console.log("I have " + apples + " apples.");


var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant':  "The world's largest land mammal.",
  'school':  'A place of learning.',
  'ice cream':  'A delicious milk-based dessert.',
};

console.log(materials);
console.log(words);


var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10."); }
else if (num === 10) {
  console.log(num + " is exactly 10."); }
else {
  console.log(num + " must be less than 10."); }


for (var num = 0; num < 10; num++) {
  console.log("Doing the same thing over and over.");
};


var base = 5;
for (var num = 0; num < 20; num++) {
  console.log(num + base);
};


var total = 0;
for (var num = 0; num < 100; num++) {
  total += num
};
console.log(total);


for (var height = 3; height < 16; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  }
  else {
    console.log("You are too short to ride this rollercoaster.");
  }
};


var containers = ['purse', 'wallet', 'backback'];
for (var num = 0; num < containers.length; num++) {
  console.log(containers[num]);
};


function hello_world() {
  console.log("Hello world!");
};

hello_world();


function add(first_num, second_num) {
  return(first_num + second_num);
};

var amount = add(5, 7);
console.log(amount);
