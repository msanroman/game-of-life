import {DeadCell, LiveCell} from "./cell";
import {Universe} from "./universe";

describe("Game of Life", () => {
  it("a universe with only one cell dies by underpopulation", () => {
    const universe = new Universe([[new LiveCell()]]);
    universe.nextStep();
    expect(universe.cells).toStrictEqual([[new DeadCell()]]);
  });
  it("a cell with two live neighbours live on to the next generation", () => {
    const universe = new Universe([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new DeadCell()]
    ]);
    universe.nextStep();
    expect(universe.cells).toStrictEqual([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new LiveCell()]
    ]);
  });
  it("a cell with three live neighbours live on to the next generation", () => {
    const universe = new Universe([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new LiveCell()]
    ]);
    universe.nextStep();
    expect(universe.cells).toStrictEqual([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new LiveCell()]
    ]);
  });
  it("a live cell with more than three neighbours dies by overpopulation", () => {
    const universe = new Universe([
      [new LiveCell(), new LiveCell(), new LiveCell()],
      [new LiveCell(), new LiveCell(), new LiveCell()],
      [new DeadCell(), new DeadCell(), new DeadCell()]
    ]);
    universe.nextStep();
    expect(universe.cells).toStrictEqual([
      [new LiveCell(), new DeadCell(), new LiveCell()],
      [new LiveCell(), new DeadCell(), new LiveCell()],
      [new DeadCell(), new LiveCell(), new DeadCell()]
    ]);
  });

  it("a dead cell with three live neighbours becomes a live cell as if by reproduction", () => {
    const universe = new Universe([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new DeadCell()]
    ]);
    universe.nextStep();
    expect(universe.cells).toStrictEqual([
      [new LiveCell(), new LiveCell()],
      [new LiveCell(), new LiveCell()]
    ]);
  });
});
