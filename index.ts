import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}

interface Events {
    [event: string]: boolean;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

class Car implements AutonomousCar {
    isRunning;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
    }

    respond(events: Events) {
        if (!this.isRunning) {
            console.log('The car is off...')
        }
    }
}

class SteeringControl implements Steering {
    execute(command: string) {
        console.log(`Executing: ${command}`)
    }

    turn(direction: string) {
        this.execute(`turn ${direction}`);
    }
}

const autonomousCar = new Car({ isRunning: false });

const steer = new SteeringControl()

// console.log(autonomousCar.isRunning);
// autonomousCar.respond(getObstacleEvents());
steer.turn('right');