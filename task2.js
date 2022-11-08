function isContainProperty(query, object) {
    for (let item in object)
        if (item === query) return true;

    return false;
}

let names = {
    Jeremy: 1,
    Vanya: 2,
    Rex: 7
}

console.log(isContainProperty("Rex", names));