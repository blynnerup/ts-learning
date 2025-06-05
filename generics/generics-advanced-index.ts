// Implementing a function which merges two object of different types.
// This file demonstrates advanced usage of generics in TypeScript.
// The return type for the function is inferred based on the input types, and thus optional.
function merge<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}

// In this function the return type is explicitly defined as a combination of the two input types.
// This is useful when you want to ensure that the return type is a combination of both input types.
function merge2<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Merges the two objects and returns a new object which contains properties from both.
console.log(merge({ name: 'Alice' }, { age: 30 })); // { name: 'Alice', age: 30 }
// Note how the property name is overwritten if it exists in both objects
console.log(merge({ name: 'Bob' }, {name: 'Bobson', living: 'poorly'})); 

// You can limit the types of the objects that can be passed to the function using constraints.
function mergeWithConstraint<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

function mergeCatWithPlace<T extends Cat, U extends string>(cat: T, place: U) {
    return { ...cat, place };
}

interface Cat {
    name: string
    age: number
}

console.log("Constraint merge");
console.log(mergeWithConstraint({ name: 'Charlie' }, { age: 5 })); // { name: 'Charlie', age: 5 }
console.log("Cat");
console.log(mergeCatWithPlace({ name: 'Whiskers', age: 3 }, 'Garden')); // { name: 'Whiskers', age: 3, place: 'Garden' }