import ReactDataSheet from "react-datasheet";
import { rowRenderer, sheetRenderer } from "./helperMethods";
import useElements from '../../hooks/elementsHooks'

const DataSheet = () => {
  const NDIGITS = 2;
  const { elements, setElements } = useElements();

  let dataArray = [];
  elements?.forEach(el => { dataArray.push([
    { value: el.id.toFixed(0) },   // id
    { value: el.nt1.toFixed(NDIGITS) },  // nt1
    { value: el.prof1.toFixed(NDIGITS) },  // prof1
    { value: (el.nt1 - el.prof1).toFixed(NDIGITS) },  // nf1
    { value: (el.nt2).toFixed(NDIGITS) },    // nt2
    { value: (el.prof2).toFixed(NDIGITS) },    // prof2
    { value: (el.nt2 - el.prof2).toFixed(NDIGITS) },   // nf2
    { value: (el.dist).toFixed(NDIGITS) },     // dist
    { value: (el.diam).toFixed(0) },     // dist
    { value: (((el.nt1 - el.prof1) - (el.nt2 - el.prof2))/el.dist*100).toPrecision(3) + "%" }, //decl
  ])});

  return (
    <ReactDataSheet
      data={dataArray}
      valueRenderer={cell => cell.value}
      sheetRenderer={sheetRenderer}
      rowRenderer={rowRenderer}
      // onCellsChanged={changes => onChange(changes)}
    />
  );
}

export default DataSheet;