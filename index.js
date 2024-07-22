"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
const autonomousCar = new Car({ isRunning: false });
const steer = new SteeringControl();
// console.log(autonomousCar.isRunning);
// autonomousCar.respond(getObstacleEvents());
steer.turn('right');
