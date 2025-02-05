
// 2
function addition(value: string) {
    console.log("Value is: " + value);
}
let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);




// 3
// primitive types in TypeScript

// string
let firstName: string = "Alice";
console.log("String example:", firstName);

// number
let year: number = 2025;
console.log("Number example:", year);

// boolean
let hasAccess: boolean = false;
console.log("Boolean example:", hasAccess);

// null
let nullableValue: null = null;
console.log("Null example:", nullableValue);

// undefined
let uninitialized: undefined = undefined;
console.log("Undefined example:", uninitialized);

// 4
function countCharacters(input: string): number {
    return input.length;
}
console.log("Character count (including spaces):", countCharacters("test 1"));

function countCharactersTrimmed(input: string): number {
    return input.trim().length;
}
console.log("Character count (excluding leading/trailing spaces):", countCharactersTrimmed(" test 1 "));

function countCharactersWithOption(input: string, excludeSpaces: boolean = false): number {
    return excludeSpaces ? input.trim().length : input.length;
}
console.log("Combined function (include spaces):", countCharactersWithOption(" test 1 "));
console.log("Combined function (exclude spaces):", countCharactersWithOption(" test 1 ", true));
