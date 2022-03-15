import { addBaz } from "./baz.js";
window.onload = function () {
    const app = document.getElementById("foo");
    app.innerHTML = "Hello Typescript World! foo";
    addBaz(app);
};
const user = {
    name: "山崎",
    height: 170,
    age: 30,
    isAdult: true
};
console.log(user.name);
function mix(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const mixNumber = mix(10, 20);
console.log(mixNumber);
const mixString = mix("田中", "太郎");
console.log(mixString);
//# sourceMappingURL=index.js.map