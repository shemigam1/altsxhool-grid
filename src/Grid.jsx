import { range } from './utils';

function Grid({ numRows, numCols }) {
  const totalBoxes = numRows * numCols;

  // Create an array of numbers from 0 to (totalBoxes - 1)
  const boxIndices = range(totalBoxes);

  return (
    <div className="grid">
      {boxIndices.map((index) => (
        <div key={index} className="grid-box">
          {}
        </div>
      ))}
    </div>
  );
}

export default Grid;
