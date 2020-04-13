export class Coordinate {
    row: number;
    column: number;

    constructor({row, column}: { row: number, column: number }) {
        this.row = row;
        this.column = column;
    }

    getRelativeCoodinate(coordinate: Coordinate) {
        return new Coordinate({
            row: this.row + coordinate.row,
            column: this.column + coordinate.column,
        })
    }
}

export const relativeCoordinates = [
    new Coordinate({
        column: -1,
        row: -1
    }),
    new Coordinate({
        column: 0,
        row: -1
    }),
    new Coordinate({
        column: 1,
        row: -1
    }),
    new Coordinate({
        column: -1,
        row: 0
    }),
    new Coordinate({
        column: 1,
        row: 0
    }),
    new Coordinate({
        column: -1,
        row: 1
    }),
    new Coordinate({
        column: 0,
        row: 1
    }),
    new Coordinate({
        column: 1,
        row: 1
    }),
];
