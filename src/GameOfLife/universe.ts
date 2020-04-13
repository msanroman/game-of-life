import {Cell, DeadCell, LiveCell} from "./cell";
import {Coordinate, relativeCoordinates} from "./coordinates";

export class Universe {
    cells: Cell[][];

    constructor(cells: Cell[][]) {
        this.cells = cells;
    }

    nextStep() {
        this.cells = this.cells.map((rows, row) =>
            rows.map((cell, column) => {
                const coordinate = new Coordinate({row: row, column: column})
                const neighbours = this.neighboursAt(coordinate);
                if (neighbours === 2) {
                    return cell;
                } else if (neighbours === 3) {
                    return cell.isAlive() ? cell : new LiveCell();
                }
                return new DeadCell();
            })
        );
    }

    private neighboursAt(coordinate: Coordinate) {
        let neighbours = 0;
        relativeCoordinates.forEach(coord => {
            const neighbour = coordinate.getRelativeCoodinate(coord);
            const cell = this.cellAt(neighbour);

            if (cell.isAlive()) {
                neighbours += 1;
            }
        });
        return neighbours;
    }

    private cellAt(coordinate: Coordinate) {
        let cell = new DeadCell();
        if (this.cells[coordinate.row]) {
            cell = this.cells[coordinate.row][coordinate.column] || new DeadCell();
        }
        return cell;
    }
}
