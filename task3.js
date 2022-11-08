function createEmptyObject() {
    return {};
}

let object = createEmptyObject();

console.log(Object.getPrototypeOf(object)); //null prototype