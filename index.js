"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
    respond(events) {
        if (!this.isRunning) {
            console.log('The car is off...');
        }
    }
}
const autonomousCar = new Car({ isRunning: false });
// console.log(autonomousCar.isRunning);
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
