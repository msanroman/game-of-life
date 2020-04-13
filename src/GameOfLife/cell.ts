export interface Cell {
    isAlive(): boolean;
}

export class LiveCell implements Cell {
    isAlive() {
        return true;
    }
}

export class DeadCell implements Cell {
    isAlive() {
        return false;
    }
}
