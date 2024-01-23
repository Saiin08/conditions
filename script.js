Exercise 1
const angle1 = Number(prompt("First angle"));
const angle2 = Number(prompt("Second angle"));
const angle3 = Number(prompt("Third angle"));
const triangle = angle1 + angle2 + angle3;

if (triangle == 180) {
  alert("This is a triangle");
  console.log(triangle);
} else {
  alert("This is not a triangle");
  console.log(triangle);
}

Exercise 2
const monthNumber = Number(prompt("How many days in the month?"));
let days = 31;

if (monthNumber == 2) {
  days = 28;
} else if (monthNumber == 4) {
  days = 30;
} else if (monthNumber == 6) {
  days = 30;
} else if (monthNumber == 9) {
  days = 30;
} else if (monthNumber == 11) {
  days = 30;
} else {
  alert("Wrong Month Number");
}

alert("month " + monthNumber + " has " + days + " days");

Exercise 3
1
const userName = prompt("Enter your username");
const passWord = prompt("Enter your password");

if (passWord == "sore-thumb-218") {
  alert("Access granted!");
} else {
  alert("Nice try!");
}

2
const passWord = prompt("Enter your password");
const samePassWord = prompt("Enter the same password");

if (passWord === samePassWord) {
  alert("Password created!");
} else {
  alert("Your passwords do not match.");
}

3
const passWord = prompt("Enter your password");
let samePassWord = null;

if (passWord.length > 8) {
  samePassWord = prompt("Enter the same password");
  if (passWord === samePassWord) {
    alert("Password created!");
  } else {
    alert("Your passwords do not match.");
  }
} else {
  alert("Your password is not secure.");
}

Exercise 4
const age = Number(prompt("Enter your age"));
const ticketPrice = 12;
let price = 0;

if (age < 6) {
  price = 0;
} else if (age <= 15) {
  price = Math.round(ticketPrice * 0.35);
} else if (age <= 26) {
  price = Math.round(ticketPrice * 0.65);
} else if (age <= 64) {
  price = ticketPrice;
} else {
  price = ticketPrice * 0.5;
}

alert("Ticket Price is " + price);

Exercise 5
const temp1 = Number(prompt("Enter the temperature 1"));
const temp2 = Number(prompt("Enter the temperature 2"));
const temp3 = Number(prompt("Enter the temperature 3"));

let highestTemp = 0;

// Test
// if (temp1 > temp2 && temp2 > temp3) {
//   highestTemp = temp1;
// } else if (temp2 > temp1 && temp1 > temp3) {
//   highestTemp = temp2;
// } else if (temp3 > temp2 && temp2 > temp1) {
//   highestTemp = temp3;
// } else {
//   alert("Not Hot");
// }

if (temp1 > temp2) {
  if (temp1 > temp3) {
    highestTemp = temp1;
  } else {
    highestTemp = temp3;
  }
}

if (temp2 > temp3) {
  highestTemp = temp1;
} else {
  highestTemp = temp3;
}

alert("Highest temperature is " + highestTemp + "degree Celsius");
