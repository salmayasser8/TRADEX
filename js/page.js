// var firstName = "salma";
// console.log(firstName);
let money = 0;
let holidays = 4;
if (holidays == 0) {
    money = 5000;
    console.log(`my money is ${money}`);
}
else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`my money is ${money}`);
}
else if (holidays == 3) {
    money = 2000;
    console.log(`my money is ${money}`);
}
else if (holidays == 4) {
    money = 1000;
    console.log(`my money is ${money}`);
}

else if (holidays == 5) {
    money = 0;
    console.log("my money is ${money}");
}

else {
    money = 0;
    console.log(`my money is ${money}`);
}
//functions
function fullName(fname, mname, lname) {
    return `${fname} ${mname} ${lname}`;
    // return fname + " " + mname + " " + lname;
}
console.log("salma", "yasser", "abdelgaber")
