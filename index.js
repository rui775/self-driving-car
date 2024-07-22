"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
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
const steer = new SteeringControl();
const autonomousCar = new Car({
    isRunning: false,
    steeringControl: steer,
});
// console.log(autonomousCar.isRunning);
// autonomousCar.respond(getObstacleEvents());
// steer.turn('right');
