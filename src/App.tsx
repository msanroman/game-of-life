import React, { useState } from "react";
import { Universe } from "./GameOfLife/universe";
import { Cell, DeadCell, LiveCell } from "./GameOfLife/cell";
import { Box, Flex, theme } from "@chakra-ui/core";
import { Button, ButtonGroup, Text } from "@chakra-ui/core/dist";

const SIZE = 64;
const EMPTY_UNIVERSE = new Array(SIZE).fill(new Array(SIZE).fill(new DeadCell()))

function App() {
  const [cells, updateCells] = useState(EMPTY_UNIVERSE);
  const [running, toggleGame] = useState<any>(null);
  const universe = new Universe(cells);
  function start() {
    let interval = setInterval(() => {
      universe.nextStep();
      updateCells(universe.cells);
    }, 500);
    toggleGame(interval);
  }
  function stop() {
    clearInterval(running);
    toggleGame(null);
  }
  function reset() {
    stop();
    updateCells(EMPTY_UNIVERSE);
  }
  function toggle(row: number, column: number) {
    const newCells = cells.map((rows, currentRow) =>
      rows.map((cell: Cell, currentColumn: number) => {
        if (column === currentColumn && row === currentRow) {
          return cell.isAlive() ? new DeadCell() : new LiveCell();
        }
        return cell;
      })
    );
    updateCells(newCells);
    stop();
  }
  return (
    <>
      <Text textAlign={"center"} mb={5} fontSize={"2xl"}>
        Game of life
      </Text>
      {universe.cells.map((rows, row) => (
        <Flex>
          {rows.map((cell, column) => (
            <Box
              as="button"
              border={!running ? "1px" : "none"}
              borderColor={theme.colors.gray["200"]}
              bg={cell.isAlive() ? "black" : "white"}
              w="1rem"
              h="1rem"
              onClick={() => toggle(row, column)}
            />
          ))}
        </Flex>
      ))}
      <ButtonGroup mt={5} spacing={4} display={"block"} textAlign={"center"}>
        <Button isDisabled={running} variantColor={"teal"} onClick={start}>
          Start
        </Button>
        <Button
          isDisabled={!running}
          variantColor={"teal"}
          variant="outline"
          onClick={stop}
        >
          Stop
        </Button>
        <Button variantColor={"teal"} variant="link" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
}

export default App;
