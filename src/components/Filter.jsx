import "./Filter.css";

const Filter = ({ handleFilter, handleReset }) => {
  return (
    <>
      <h3 id="h3Filter">Choose your ranger sex :</h3>
      <div className="buttons">
        <button onClick={() => handleFilter("male")}>Male</button>
        <button onClick={() => handleFilter("female")}>Female</button>
        <button onClick={() => handleFilter("machine")}>Machine</button>
      </div>
      <div className="reset">
        <button onClick={() => handleReset("rest")}>Reset</button>
      </div>
    </>
  );
};

export default Filter;
