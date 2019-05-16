const SwitchButton=function () {
    this.connectToLamp=function (electricLamp) {
        this.lamp=electricLamp;
    }
    this.switchOff=function () {
        this.lamp.turnOff();
    }
    this.switchOn=function () {
        this.lamp.turnOn();
    }
}
const ElectricLamp=function () {
    this.turnOn=function () {
        this.status=true;
        l('den tat');
    }
    this.turnOff=function () {
        this.status=false;
        l('den bat');
    }

}
const l=console.log;
let switchButton=new SwitchButton();
let electricLamp=new ElectricLamp();
switchButton.connectToLamp(electricLamp);
for (let i=0;i<10;i++){
    switchButton.switchOn();
    switchButton.switchOff();
}