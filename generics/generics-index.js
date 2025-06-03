// Semi generic function example
// This function takes a number or a string and returns a number or a string
function doThing(thing) {
    if (typeof thing === "number") {
        return thing * 2;
    }
    else {
        return thing.toUpperCase();
    }
}
// A generic function example which can take any type
// This function takes a generic type T and returns the same type T
// It can be used with any type, such as number, string, or even custom types
function doTheGenericThing(thing) {
    return thing;
}
// The following lines demonstrate how to use the generic function with different types
// Behind the scenes these are all the same function, but TypeScript infers the type T based on the argument passed
// Meaning that in reality the Array<number> and Array<string> are the same function, but with different types (T), which is inferred by TypeScript
var nums = [1, 2, 3];
var strings = ["a", "b", "c"];
