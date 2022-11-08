//Device
function Device(name) {
    this.name = name;
    this.model = String();
    this.active = false;
    this.wattage = 0;
}
Device.prototype.turnOn = function () {
    this.active = true;
}
Device.prototype.turnOff = function () {
    this.active = false;
}

//Lamp
Lamp.prototype = new Device("Лампа");
function Lamp(model, wattage) {
    this.model = model;
    this.mode = 1;
    this.wattage = wattage;
}
Lamp.prototype.setMode = function (mode) {
    this.mode = mode;
    this.wattage *= mode;
}

//Notebook
Notebook.prototype = new Device("Ноутбук");
function Notebook(model, wattage) {
    this.model = model;
    this.wattage = wattage;
    this.workload = 1;
}
Notebook.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.wattage *= workload;
}

//Instances
const lamp1 = new Lamp("GP Lighting", 50);
const lamp2 = new Lamp("Osram", 30);
const lenovo = new Notebook("Lenovo", 100);
const asus = new Notebook("Asus", 90);

lamp1.turnOn();
lamp2.turnOn();
lamp2.setMode(2);
lenovo.turnOff();
asus.turnOn();
asus.setWorkload(3);

console.log(getWattage([lamp1, lamp2, lenovo, asus]));
// В розетку включены:
// Лампа "GP Lighting" (50 Вт)
// Лампа "Osram" (60 Вт)
// Ноутбук "Asus" (270 Вт)
// Потребляемая мощность: 380 Вт.

function getWattage(devices) {
    let answer = "В розетку включены: \n";
    let wattage = 0;

    devices.forEach((element) => {
        if (element.active) {
            answer += element.name + " \"" + element.model + "\" (" + element.wattage + " Вт)\n";
            wattage += element.wattage;
        }
    });

    answer += "Потребляемая мощность: " + wattage + " Вт.";

    return answer;
}