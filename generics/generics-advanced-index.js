var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Implementing a function which merges two object of different types.
// This file demonstrates advanced usage of generics in TypeScript.
// The return type for the function is inferred based on the input types, and thus optional.
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// In this function the return type is explicitly defined as a combination of the two input types.
// This is useful when you want to ensure that the return type is a combination of both input types.
function merge2(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Merges the two objects and returns a new object which contains properties from both.
console.log(merge({ name: 'Alice' }, { age: 30 })); // { name: 'Alice', age: 30 }
// Note how the property name is overwritten if it exists in both objects
console.log(merge({ name: 'Bob' }, { name: 'Bobson', living: 'poorly' }));
// You can limit the types of the objects that can be passed to the function using constraints.
function mergeWithConstraint(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
function mergeCatWithPlace(cat, place) {
    return __assign(__assign({}, cat), { place: place });
}
console.log("Constraint merge");
console.log(mergeWithConstraint({ name: 'Charlie' }, { age: 5 })); // { name: 'Charlie', age: 5 }
console.log("Cat");
console.log(mergeCatWithPlace({ name: 'Whiskers', age: 3 }, 'Garden')); // { name: 'Whiskers', age: 3, place: 'Garden' }
