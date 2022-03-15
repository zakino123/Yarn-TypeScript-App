import { addBaz } from "./baz.js";
window.onload = function () {
    const app = document.getElementById("foo");
    app.innerHTML = "Hello Typescript World! foo";
    addBaz(app);
};
//# sourceMappingURL=index.js.map