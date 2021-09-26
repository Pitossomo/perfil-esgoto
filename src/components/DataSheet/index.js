import ReactDataSheet from "react-datasheet";
import { objectToGrid, rowRenderer, sheetRenderer, cellChangesHandler } from "./helperMethods";
import useElements from '../../hooks/elementsHooks';

const DataSheet = () => {
  const { elements, setElements } = useElements();
  const grid = objectToGrid(elements);

  return (
    <ReactDataSheet
      data={grid}
      valueRenderer={cell => cell.value}
      sheetRenderer={sheetRenderer}
      rowRenderer={rowRenderer}
      onCellsChanged={changes => cellChangesHandler(changes, grid, elements, setElements)}
    />
  );
}

export default DataSheet;