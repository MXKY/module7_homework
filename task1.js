let oldNames = {
    Dmitry: 1,
    Maria: 3,
    Alex: 5
}

let newNames = Object.create(oldNames);
newNames.Max = 10;
newNames.Georg = 3;
newNames.Johnny = 7;

logObject(newNames);

function logObject(object) {
    for (let item in object) {
        if (object.hasOwnProperty(item))
            console.log(item + ": " + object[item]);
    }
}