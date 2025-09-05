function Appliance(powerOn) {
    this.powerOn = !!powerOn;
}
Appliance.prototype.toggle = function () {
    this.powerOn = !this.powerOn;
    return this.powerOn;
};
function WashingMachine(powerOn, mode) {
    Appliance.call(this, powerOn);
    this.mode = mode || "normal";
}
WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.constructor = WashingMachine; // 프로토타입 체이닝

WashingMachine.prototype.wash = function() {
    if (!this.powerOn) return `Cannot wash: power off`;
    return `Washing ... ${this.mode}`;
}

const wm = new WashingMachine(false, "quick");
console.log(wm.wash()); // Cannot wash: power off
console.log(wm.toggle()); // true
console.log(wm.wash()); // Washing ... quick

console.log(wm.constructor); // [Function: WashingMachine]
console.log(wm.constructor.name); // WashingMachine
