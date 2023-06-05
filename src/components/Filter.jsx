import "./Filter.css";

const Filter = ({ handleFilter, handleReset }) => {
  return (
    <>
      <div className="divButtons">
        <div>
          <h3>Choose your ranger sex :</h3>
        </div>
        <div className="buttons">
          <button onClick={() => handleFilter("male")}>Male</button>
          <button onClick={() => handleFilter("female")}>Female</button>
          <button onClick={() => handleFilter("machine")}>Machine</button>
        </div>
      </div>
      <div className="reset">
        <button onClick={() => handleReset("rest")}>Reset</button>
      </div>
    </>
  );
};

export default Filter;
