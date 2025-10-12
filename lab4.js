let name = prompt("What is your name?");
let Item = prompt('Item in need')


while (true) {
let Itemquan = prompt("Please Enter the Quantity of items (We Only accept Quantity of 1 through 99):");

// If the user clicked "Cancel", stop the loop
if (Itemquan === null) {
  alert("Canceled!");
  break;
}

number = parseInt(Itemquan);

if (!isNaN(number) && number >= 1 && number <= 99) {
  break;
} else {
  alert("Sorry, We Only Accpect Quantity between 1 and 99.");
}
}
alert("Hello, " + name + "!" + "");
