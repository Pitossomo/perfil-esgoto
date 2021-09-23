import { useContext } from "react";
import { ElementsContext } from "../providers/ElementsProvider";

const useElements = () => {
  const { elements, setElements } = useContext(ElementsContext);

  return { elements, setElements };
}

export default useElements;