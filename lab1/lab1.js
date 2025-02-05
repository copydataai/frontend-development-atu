// 2
function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
// 3
// primitive types in TypeScript
// string
var firstName = "Alice";
console.log("String example:", firstName);
// number
var year = 2025;
console.log("Number example:", year);
// boolean
var hasAccess = false;
console.log("Boolean example:", hasAccess);
// null
var nullableValue = null;
console.log("Null example:", nullableValue);
// undefined
var uninitialized = undefined;
console.log("Undefined example:", uninitialized);
// 4
function countCharacters(input) {
    return input.length;
}
console.log("Character count (including spaces):", countCharacters("test 1"));
function countCharactersTrimmed(input) {
    return input.trim().length;
}
console.log("Character count (excluding leading/trailing spaces):", countCharactersTrimmed(" test 1 "));
function countCharactersWithOption(input, excludeSpaces) {
    if (excludeSpaces === void 0) { excludeSpaces = false; }
    return excludeSpaces ? input.trim().length : input.length;
}
console.log("Combined function (include spaces):", countCharactersWithOption(" test 1 "));
console.log("Combined function (exclude spaces):", countCharactersWithOption(" test 1 ", true));
